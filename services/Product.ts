import { Product, ProductItem } from "@/model/Product";

const productService = {
  /**
   * Fetch all products from the database
   * @returns {Promise<Product[]>} Array of products
   * @throws {Error} Throws an error if fetching fails
   */
  getAllProducts: async (): Promise<ProductItem[]> => {
    try {
      // Attempt to retrieve all products from the database
      const products = await Product.find();

      // Return the retrieved products
      return products;
    } catch (error: unknown) {
      // Log the error for debugging purposes
      console.error("Error fetching products:", error);

      // Throw a new error to propagate it to the caller
      throw new Error(error instanceof Error ? error.message : "Failed to fetch products");
    }
  },
  addProduct: async (item: Partial<ProductItem>) => {
    try {
      const newProduct = new Product(item);
      await newProduct.save();
      return newProduct;
    } catch (error: unknown) {
      console.error("Error adding product:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to add product");
    }
  },
};

export default productService;
