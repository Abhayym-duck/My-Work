import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background font-sans text-foreground">
      <Container size="wide" className="py-6 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">{siteConfig.name}</span>
            <span className="text-sm text-muted-foreground">
              {siteConfig.role}
            </span>
          </div>

          <nav aria-label="Contact links" className="flex flex-wrap gap-x-6 gap-y-2">
            {[{ label: "LinkedIn", url: siteConfig.social.linkedin }, { label: "Email", url: `mailto:${siteConfig.email}` }].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm capitalize text-muted-foreground transition-colors duration-(--duration-fast) hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

      </Container>
    </footer>
  );
}
