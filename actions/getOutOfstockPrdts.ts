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
    
    const filterPrdts=products.filter((prdt)=>prdt.productStock > 1)
    return filterPrdts;
  } catch (error) {
    console.log(error);
    return null;
  }
}
