"use server"
import db from "@/lib/db";

export async function getBannerProducts(bannerId:string) {
  try {
    const banner = await db.banner.findUnique({
      where: { id: bannerId },
    });

    if (!banner) {
      throw new Error("Banner not found");
    }

    const products = await db.product.findMany({
      where: {
        id: {
          in: banner.productIds,
        },
      },
    });

    return { banner, products };
  } catch (error) {
    console.error("Failed to get banner products:", error);
    return { banner: null, products: [] };
  }
}
