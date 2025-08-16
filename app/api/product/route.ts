import { NextRequest, NextResponse } from "next/server";
import productService from "@/services/Product"; // Adjust path if needed
import connectDb from "@/config/connection";
/**
 * GET /products
 * Fetch all products from the database
 */
export async function GET() {
  try {
    await connectDb();
    // Fetch all products using the service
    const products = await productService.getAllProducts();

    // Return products with 200 status
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error: unknown) {
    // Log the error for debugging
    console.error("Error fetching products:", error);

    // Return an error response with 500 status
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

/**
 * POST /products
 * Add a new product
 */
export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const body = await req.json();

    // Validation
    if (!body.name || typeof body.name !== "string") {
      return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 });
    }
    if (body.price === undefined || typeof body.price !== "number" || body.price < 0) {
      return NextResponse.json(
        { success: false, message: "Price must be a positive number" },
        { status: 400 }
      );
    }

    const newProduct = await productService.addProduct(body);
    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error adding product:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
