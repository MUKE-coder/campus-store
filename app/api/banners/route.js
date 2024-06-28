import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl, isActive, productIds } = await request.json();
    // console.log(title, link, imageUrl, isActive, productIds)
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive,
        productIds,
      },
    });
    // console.log(newBanner)
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create Banner",
      },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(banners);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Banner",
        error,
      },
      { status: 500 }
    );
  }
}
