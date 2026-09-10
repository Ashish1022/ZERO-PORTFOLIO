import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center">
      <div className="shell">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-7 max-w-[14ch] text-foreground">
          This page doesn&apos;t exist.
        </h1>
        <p className="lede mt-8 max-w-md">
          The link may be out of date, or the page moved. The work index is
          probably what you were after.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/work" className="btn-solid">
            View work
          </Link>
          <Link href="/" className="btn-ghost">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
