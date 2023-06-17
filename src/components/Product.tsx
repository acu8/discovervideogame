import React, { useEffect, useState } from "react";

const Product = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching the products in", category);
    setProducts(["clothing", "Household"]);
  }, [category]);
  return <h1>Product</h1>;
};

export default Product;
