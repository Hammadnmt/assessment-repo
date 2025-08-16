import { NextRequest, NextResponse } from "next/server";
import cartService from "@/services/Cart";
import connectDb from "@/config/connection";

/**
 * PUT /cart/:id
 * Update quantity of a cart item
 */
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDb();
    const id = (await params).id;

    const body = await req.json();
    console.log("req is here with body", body);
    const updatedItem = await cartService.updateItemQuantity(id, body.quantity);

    if (!updatedItem) {
      return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedItem }, { status: 200 });
  } catch (error: unknown) {
    console.error(`Error updating cart item`, error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

/**
 * DELETE /cart/:id
 * Remove a cart item
 */
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDb();
    const id = (await params).id;

    const removedItem = await cartService.removeItem(id);

    if (!removedItem) {
      return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: removedItem }, { status: 200 });
  } catch (error: unknown) {
    console.error(`Error removing cart item`, error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
