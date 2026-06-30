import { Helmet } from "react-helmet-async";

export default function SchemaMarkup({ schema }) {
  if (!schema) {
    console.warn("⚠️ No schema provided to SchemaMarkup component");
    return null;
  }

  const schemas = Array.isArray(schema) ? schema : [schema];

  // Validate schemas
  schemas.forEach((s, idx) => {
    if (!s['@context']) {
      console.warn(`❌ Schema ${idx} missing @context`);
    }
    if (!s['@type']) {
      console.warn(`❌ Schema ${idx} missing @type`);
    }
  });

  console.log(
    `✅ SchemaMarkup rendering ${schemas.length} schema(s) for:`,
    window.location.pathname
  );

  return (
    <Helmet>
      <script type="application/ld+json" id="blog-schema">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}