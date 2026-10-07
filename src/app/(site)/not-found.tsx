import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section spacing="default" as="div" className="pt-16 text-center">
      <p className="text-sm font-medium uppercase tracking-(--tracking-wide) text-muted">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-(--tracking-tight)">
        Page not found
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </Section>
  );
}
