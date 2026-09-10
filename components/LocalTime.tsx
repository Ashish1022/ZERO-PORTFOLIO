"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/**
 * Live local time in Mumbai. Renders nothing on the server so the static HTML
 * never carries a stale clock that would mismatch on hydration.
 */
const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--:--"} <span className="text-muted-foreground">IST</span>
    </span>
  );
};

export default LocalTime;
