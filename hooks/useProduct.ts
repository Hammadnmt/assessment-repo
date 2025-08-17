import { useState, useEffect } from "react";

export interface Product {
  _id: string | number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch products from API
 */
export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          setError(data.message || "Failed to fetch products");
        }
      } catch (err: any) {
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
