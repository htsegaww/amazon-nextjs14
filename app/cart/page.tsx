"use client";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import React from "react";

const CartPage = () => {
  const cart = useAppSelector(getCart);
  return (
    <div>
      {cart.map((item: Product) => {
        <div key={item.id}>{item.image}</div>;
      })}
    </div>
  );
};

export default CartPage;
