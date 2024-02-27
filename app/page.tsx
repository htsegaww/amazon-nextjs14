"use client";

import { useSupabase } from "@/hooks/useSupabase";
import { useEffect } from "react";

export default function Home() {
  const { products, getProducts } = useSupabase();

  useEffect(() => {
    getProducts();
    console.log(products);
  }, [getProducts]);
  return <main>home</main>;
}
