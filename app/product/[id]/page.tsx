"use client";
import ProductDetails from "@/app/components/shared/ProductDetails";
import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();

  const { id } = useParams();

  console.log(singleProduct);
  useEffect(() => {
    getSingleProduct(Number(id));
  }, [getSingleProduct, id]);

  return (
    <div className="bg-white p-16">
      <ProductDetails product={singleProduct} />
    </div>
  );
};

export default ProductPage;
