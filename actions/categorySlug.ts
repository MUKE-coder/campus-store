"use server";
import db from "@/lib/db";

export async function getCategoryBySlug(slug: string) {
  try {
    const category = await db.category.findUnique({
      where: {
        slug: slug,
      },
      include: {
        subCategories: true,
        products: {
          where: {
            isActive: true,
            productStock: {
              gt: 1,
            },
          },
        },
      },
    });
    return category;
  } catch (error) {
    console.log(error);
    return null;
  }
}


