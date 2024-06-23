"use server";
import db from "@/lib/db";

export async function getProductsBySubCategoryId(id) {
  try {
    const subCategory = await db.subCategory.findUnique({
      where: {
        id: id,
      },
      include: {
        products: {
          include: true
        },
      },
    });
    return subCategory ? subCategory.products : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getSubCategoryId(id) {
  try {
    const subCategory = await db.subCategory.findUnique({
      where: {
        id
      },
    
    });
    return subCategory ? subCategory.products : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
