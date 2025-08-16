import request from "supertest";
import app from "@/app"; // Your Next.js custom server or API handler

describe("Product API", () => {
  it("should fetch all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({ name: "Product Test", price: 50 });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe("Product Test");
    expect(res.body.data.price).toBe(50);
  });
});
