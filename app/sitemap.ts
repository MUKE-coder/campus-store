import { getAllProducts } from "@/actions/products";

export default async function sitemap() {
  const [products] = await Promise.all([
    getAllProducts(),
  ]);
  const baseUrl = "https://Kyajastoreug.com";
  const productUrl = products.map((product) => {
    return {
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...productUrl,
  ];
}
