export default function robots() {
  const baseUrl = "https://Kyajastoreug.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: ` ${baseUrl}/sitemap.xml`,
  };
}
