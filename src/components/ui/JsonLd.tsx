/**
 * Renders a structured-data object as a JSON-LD <script> tag.
 * `data` should come from the builders in @/lib/structured-data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
