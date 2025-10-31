import React, { useState, useEffect } from "react";
import { productAPI, categoryAPI } from "../services/api";
import type { Product, Category } from "../types";
import { ProductCard } from "../components/ProductCard";

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await categoryAPI.getAll();
      setCategories(response.data);
      console.log("Category API response:", response.data);
    } catch (error) {
      console.error("Error loading categories: ", error);
    }
  };

  const loadProducts = async (categorySlug?: string) => {
    try {
      setLoading(true);
      const response = categorySlug
        ? await productAPI.getByCategoty(categorySlug)
        : await productAPI.getAll();
      //   setProducts(response.data);

      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error loading products: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChance = (slug: string) => {
    setSelectedCategory(slug);
    loadProducts(slug || undefined);
  };

  return (
    <div style={styles.container}>
      <h1>Products</h1>
      <div style={styles.filterContainer}>
        <label>Filter by category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChance(e.target.value)}
          style={styles.select}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "1rem 2rem" },
  filterContainer: { margin: "2rem 0" },
  select: {
    padding: "0.5rem",
    marginLeft: "1rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
};
