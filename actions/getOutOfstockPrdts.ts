"use server";
import db from "@/lib/db";

export async function getOutOfStockProducts() {
  try {
    const products = await db.product.findMany({
      where: {
        productStock: {
          lte: 0,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
}
