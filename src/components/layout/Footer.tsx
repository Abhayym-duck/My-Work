import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = Object.entries(siteConfig.social);

  return (
    <footer className="mt-auto border-t border-border">
      <Container size="wide" className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">{siteConfig.name}</span>
            <span className="text-sm text-muted-foreground">
              {siteConfig.role}
            </span>
          </div>

          <nav aria-label="Social" className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm capitalize text-muted-foreground transition-colors duration-(--duration-fast) hover:text-foreground"
              >
                {platform}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <Link href="/contact" className="hover:text-foreground">
            Get in touch
          </Link>
        </div>
      </Container>
    </footer>
  );
}
