import SlackConfirmEmail, { NewOrderEmail } from "@/components/ReactEmail";
import db from "@/lib/db";
import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { userId, name, email, phone, address, orderNumber, totalOrderAmount, paymentMethod, orderItems } = await request.json();

    // Use the Prisma transaction
    const result = await db.$transaction(async (prisma) => {
      // Create the new order
      const newOrder = await prisma.order.create({
        data: {
          userId,
          name,
          email,
          phone,
          address,
          orderNumber,
          totalOrderAmount,
          paymentMethod,
        },
      });

      // console.log(newOrder)
      // Create order items
      // const newOrderItems = await prisma.orderItem.createMany({
      //   data: orderItems.map((item) => ({
      //     productId: item.id,
      //     quantity: parseInt(item.qty),
      //     price: parseFloat(item.salePrice),
      //     orderId: newOrder.id,
      //     imageUrl: item.imageUrl,
      //     title: item.title,
      //   })),
      // });
    // console.log(newOrderItems)
      // Create sales records

      // const sales = await Promise.all(
      //   orderItems.map(async (item) => {
      //     const totalAmount = parseFloat(item.salePrice) * parseInt(item.quantity);

      //     const newSale = await prisma.sale.create({
      //       data: {
      //         orderId: orderNumber,
      //         productTitle: item.title,
      //         productImage: item.imageUrl,
      //         productPrice: parseFloat(item.salePrice),
      //         productQty: parseInt(item.quantity),
      //         productId: item.id,
      //         // vendorId: item.vendorId,
      //         total: totalAmount,
      //       },
      //     });

      //     return newSale;
      //   })
      // );

      return { newOrder};
    });

    // Send order confirmation email
    // await resend.emails.send({
    //   from: 'New Order !! <info@flakolimited.com>',
    //   to: ["Info.kyaja@gmail.com"],
    //   subject: 'New Order',
    //   react: NewOrderEmail(),
    // });

    return NextResponse.json(result.newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create Order",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Orders",
        error,
      },
      { status: 500 }
    );
  }
}
