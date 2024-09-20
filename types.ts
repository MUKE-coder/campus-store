import { UserRole } from "@prisma/client"; 

interface CustomUser {
  id: string;
  name?: string;
  email?: string;
  role?: UserRole;
  status?: boolean;
  image?: string;
  emailVerified?: boolean;
}

interface CustomToken extends CustomUser {
  picture?: string;
}

interface CustomSession {
  user: CustomUser;
}
// Types for Product, Category, and SubCategory
export type ProductTypes = {
  id: string; // Assuming each product has a unique ID
  barcode: string;
  imageUrl:string;
  categoryId: string;
  description: string;
  subCategoryId: string;
  isActive: boolean;
  isWholesale: boolean;
  productCode: string;
  productPrice: number;
  salePrice: number;
  sku: string;
  slug: string;
  tags: string[];
  title: string;
  type: string; // Adjust this type as needed
  unit: string; // Adjust this type as needed
  wholesalePrice: number;
  wholesaleQty: number;
  productStock: number;
  qty: number;
  productImages: string[]; // Array of image URLs
  createdAt: Date; // Assuming you have createdAt field
  updatedAt: Date; // Assuming you have updatedAt field
  category: Category; // Nested type for Category
  subCategory: SubCategory; // Nested type for SubCategory
};


export type SubCategory = {
  id: string; // Assuming each subcategory has a unique ID
  name: string; // The name of the subcategory
  slug: string; // The slug for the subcategory
  categoryId: string; // The ID of the parent category
  createdAt: Date; // Assuming you have createdAt field
  updatedAt: Date; // Assuming you have updatedAt field
  products: ProductTypes[]; // Array of products in this subcategory
};

// types.ts (or wherever you define your types)

// Banner type definition
export type Banner = {
  id: string;
  title: string; // Ensure this is included in the data
  link?: string;
  imageUrl: string;
  previewImageUrl?: string;
  isActive: boolean;
  productIds: string[];
  createdAt: Date; // If you have these fields in your data
  updatedAt: Date;
  position: number; // Add if needed
};

// Category type definition
export type Category = {
  id: string;
  title: string; // Ensure this is included in the data
  slug: string;
  imageUrl?: string;
  description?: string;
  isActive: boolean;
  icon?: string;
  createdAt: Date; // Ensure this is included
  updatedAt: Date;
  subCategories: SubCategory[]; // Ensure subCategories property exists if needed
  products: ProductTypes[]; // Ensure products property exists if needed
};
