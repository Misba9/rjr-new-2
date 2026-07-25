import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  /** One or more schema.org objects (each becomes a ld+json script) */
  data: object | object[];
}

/**
 * Injects JSON-LD structured data into <head> via react-helmet-async.
 * Does not render any visible UI.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          // Stable key from @type + @id when available
          key={getSchemaKey(schema, index)}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

function getSchemaKey(schema: object, index: number): string {
  const record = schema as Record<string, unknown>;
  const type = String(record['@type'] ?? 'Schema');
  const id = typeof record['@id'] === 'string' ? record['@id'] : String(index);
  return `${type}-${id}`;
}
