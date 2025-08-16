import { NextRequest, NextResponse } from "next/server";
import cartService from "@/services/Cart";
import connectDb from "@/config/connection";

/**
 * GET /cart
 * Fetch all cart items
 */
export async function GET() {
  try {
    await connectDb();
    const items = await cartService.getAllItems();
    return NextResponse.json({ success: true, data: items }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching cart items:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

/**
 * POST /cart
 * Add an item to the cart
 */
export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const body = await req.json();
    const newItem = await cartService.addItem(body);
    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error adding item to cart:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
