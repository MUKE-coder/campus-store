export default function robots() {
  const baseUrl = "https://campusstoreug.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: ` ${baseUrl}/sitemap.xml`,
  };
}
