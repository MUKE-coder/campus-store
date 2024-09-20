"use server";
import db from "@/lib/db";

export async function getCategoryBySlug(slug:string) {
  try {
    const category = await db.category.findUnique({
      where: {
        slug: slug,
      },
      include: {
        subCategories: true,
        products: true,
      },
    });
    return category;
  } catch (error) {
    console.log(error);
    return null;
  }
}
