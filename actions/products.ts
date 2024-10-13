"use server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      where:{
        isActive:true
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

export async function createProduct(data:any) {
  try {
    const {
      barcode,
      categoryId,
      description,
      subCategoryId,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      sku,
      slug,
      tags,
      title,
      type,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
      productImages,
    } = data;
    //Check if this product already exists in the db
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return {
        data: null,
        message: `Product ( ${title})  already exists in the Database`,
        status: 409,
      };
    }
    const newProduct = await db.product.create({
      data: {
        barcode,
        categoryId,
        description,
        subCategoryId,
        productImages,
        imageUrl: productImages[0],
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        slug,
        tags,
        title,
        type,
        unit,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productStock: parseInt(productStock),
        qty: parseInt(qty),
        // category: {
        //   connect: { id: categoryId },
        // },
        // user: {
        //   connect: { id: farmerId },
        // },
      },
    });
    // console.log(newProduct);
    revalidatePath("/dashboard/products");
    return newProduct;
  } catch (error) {
    console.log(error);
  }
}
