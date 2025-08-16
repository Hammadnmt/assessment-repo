import { NextRequest, NextResponse } from "next/server";
import cartService from "@/services/Cart";

/**
 * PUT /cart/:id
 * Update quantity of a cart item
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const updatedItem = await cartService.updateItemQuantity(id, body.quantity);

    if (!updatedItem) {
      return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedItem }, { status: 200 });
  } catch (error: unknown) {
    console.error(`Error updating cart item ${params.id}:`, error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

/**
 * DELETE /cart/:id
 * Remove a cart item
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const removedItem = await cartService.removeItem(id);

    if (!removedItem) {
      return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: removedItem }, { status: 200 });
  } catch (error: unknown) {
    console.error(`Error removing cart item ${params.id}:`, error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
