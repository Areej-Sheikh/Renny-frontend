import { Helmet } from "react-helmet-async";

export default function SchemaMarkup({ schema }) {
   console.log(
    "Schema injected for:",
    window.location.pathname,
    schema
  );
    console.log("Schema Loaded:");
   

  if (!schema) return null;
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <Helmet>
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}