"use server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

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

export async function getAllInActiveProducts() {
  try {
    const products = await db.product.findMany({
      where:{
        isActive:false
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subCategory: true,
        category: true,
      },
    });
    revalidatePath("/dashboard")

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
}
