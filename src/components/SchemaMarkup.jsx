import { Helmet } from "react-helmet-async";

export default function SchemaMarkup({ schema }) {
   console.log(
    "Schema injected for:",
    window.location.pathname,
    schema
  );
    console.log("Schema Loaded:");
   

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}