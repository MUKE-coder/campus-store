import prisma from "@/lib/db";
import {
  BarChartHorizontal,
  Combine,
  DollarSign,
  LayoutGrid,
} from "lucide-react";
import { NextResponse } from "next/server";
function calculateSalesSummary(sales) {
  const summary = sales.reduce(
    (acc, sale) => {
      acc.salesCount += sale.productQty;
      acc.totalRevenue += sale.productPrice * sale.productQty;
      return acc;
    },
    { salesCount: 0, totalRevenue: 0 }
  );

  return summary;
}
export async function GET() {
  try {
    const sales = await prisma.sale.findMany({
      select: {
        productPrice: true,
        productQty: true,
      },
    });
    const salesSummary = calculateSalesSummary(sales);
    const ordersCount = await prisma.order.count();
    const productsCount = await prisma.product.count();
    const analytics = [
      {
        title: "Total Sales",
        count: salesSummary.salesCount,
        countUnit: "",
        detailLink: "/dashboard/sales",
        icon: BarChartHorizontal,
      },
      {
        title: "Total Revenue",
        count: salesSummary.totalRevenue,
        countUnit: "$",
        detailLink: "/dashboard/sales",
        icon: DollarSign,
      },
      {
        title: "Total Orders",
        count: ordersCount,
        countUnit: "",
        detailLink: "/dashboard/orders",
        icon: Combine,
      },
      {
        title: "Total Products",
        count: productsCount,
        countUnit: "",
        detailLink: "/dashboard/products",
        icon: LayoutGrid,
      },
    ];
    return NextResponse.json(analytics);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error,
    });
  }
}
