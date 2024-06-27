"use server"
import db from "@/lib/db";

export async function searchProducts(searchTerm) {
  try {
    const products = await db.product.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } }
        ]
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subCategory: true,
        category: true,
      },
    });
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSuggestions(searchTerm) {
  try {
    const products = await db.product.findMany({
      where: {
        title: { contains: searchTerm, mode: 'insensitive' }
      },
      select: {
        title: true
      }
    });
    return products.map(product => product.title);
  } catch (error) {
    console.log(error);
    return [];
  }
}
