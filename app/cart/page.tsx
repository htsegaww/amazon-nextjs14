"use client";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";

const CartPage = () => {
  const cart = useAppSelector(getCart);
  return (
    <div>
      {cart.map((item: Product) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default CartPage;
