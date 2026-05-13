import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Renny Strips",
  description = "Renny Strips Ltd. is a leading steel manufacturing company specializing in scaffolding systems, ERW pipes, formwork solutions, engineering innovation, and industrial excellence.",
  keywords = "Renny Strips, steel manufacturing, scaffolding systems, ERW pipes, formwork solutions, steel industry India",
  image = "https://rennystrips.com/og-image.jpg",
  url = "https://rennystrips.com",
  type = "website",
}) => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Renny Strips Ltd." />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Renny Strips" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Renny Strips Ltd.",
          url: "https://rennystrips.com",
          logo: "https://rennystrips.com/logo.png",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;