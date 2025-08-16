import request from "supertest";
import app from "@/app"; // Your Next.js custom server or API handler

describe("Cart API", () => {
  let cartItemId: string;

  it("should add a cart item", async () => {
    const res = await request(app).post("/api/cart").send({ name: "Product A", price: 20, quantity: 2 });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    cartItemId = res.body.data._id;
  });

  it("should fetch all cart items", async () => {
    const res = await request(app).get("/api/cart");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should update cart item quantity", async () => {
    const res = await request(app).put(`/api/cart/${cartItemId}`).send({ quantity: 5 });

    expect(res.status).toBe(200);
    expect(res.body.data.quantity).toBe(5);
  });

  it("should delete a cart item", async () => {
    const res = await request(app).delete(`/api/cart/${cartItemId}`);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
