import YelpRecentLoginEmail from "@/components/AdminTemplate";
import EmailTemplate from "@/components/front-end/EmailTemplate";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define a type for the order items
interface OrderItem {
  id: string;
  qty: string; // Assuming qty is a string from request
  salePrice: string; // Assuming salePrice is a string from request
  imageUrl: string;
  title: string;
}

export async function POST(request: NextRequest) {
  try {
    const {
      userId,
      name,
      email,
      phone,
      address,
      orderNumber,
      totalOrderAmount,
      paymentMethod,
      orderItems,
    }: {
      userId: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      orderNumber: string;
      totalOrderAmount: number; 
      paymentMethod: string;
      orderItems: OrderItem[]; 
    } = await request.json();

    const result = await db.$transaction(async (prisma) => {
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

      const newOrderItems = await prisma.orderItem.createMany({
        data: orderItems.map((item) => ({
          productId: item.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          orderId: newOrder.id,
          imageUrl: item.imageUrl,
          title: item.title,
        })),
      });

      for (const item of orderItems) {
        await prisma.product.update({
          where: { id: item.id },
          data: {
            productStock: {
              decrement: parseInt(item.qty),
            },
          },
        });
      }
      return { newOrder, newOrderItems };
    });

    const verify = await resend.emails.send({
      from: 'Thank You For Ordering on kyaja ecommerce <info@kyaja.com>',
      to: email,
      subject: 'Order Successful',
      react: EmailTemplate({ orderItems }),
    });
    // info.kyaja@gmail.com
    const OwerEmail = await resend.emails.send({
      from: 'You have a new Order <info@kyaja.com>',
      to: "info.kyaja@gmail.com",
      subject: "New Order",
      react: YelpRecentLoginEmail({ name, email, phone, address, totalOrderAmount ,orderItems}),
    });

    console.log(verify, OwerEmail);
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

export async function GET() {
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
