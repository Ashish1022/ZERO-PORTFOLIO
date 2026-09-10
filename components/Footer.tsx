import { navbarLinks, profile, socials } from "@/constants";
import Link from "next/link";
import FooterMark from "./FooterMark";
import LocalTime from "./LocalTime";
import RollText from "./RollText";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Currently</p>
            <p className="h3 max-w-md text-foreground">
              Open to freelance work and interesting problems.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link mt-6 inline-flex text-[15px]"
            >
              {profile.email}
            </a>
          </div>

          <nav className="md:col-span-3">
            <p className="eyebrow mb-5">Pages</p>
            <ul className="space-y-2.5">
              {navbarLinks.map(({ route, label }) => (
                <li key={route}>
                  <Link
                    href={route}
                    className="group inline-block text-[14px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <RollText>{label}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3">
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {socials.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <RollText>{label}</RollText>
                    <span
                      aria-hidden
                      className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">© {year} Ashish Jadhav</p>
          <p className="meta">
            <LocalTime />
          </p>
          <p className="meta">Mumbai, India · 19.07°N 72.87°E</p>
        </div>
      </div>

      <FooterMark />
    </footer>
  );
};

export default Footer;
