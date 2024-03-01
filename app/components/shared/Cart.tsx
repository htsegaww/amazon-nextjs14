"use client";

import { useAppSelector } from "@/hooks/redux";
import { clearCart, getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import React from "react";
import CustomHR from "./CustomHR";
import CartItem from "./CartItem";
import { Check } from "lucide-react";
import ProductLinkText from "./ProductLinkText";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import Subtotal from "./Subtotal";

const Cart = () => {
  const cart = useAppSelector(getCart);
  const router = useRouter();

  let total = 0;
  cart.forEach((item: Product) => (total = total + item.price!));

  return (
    <div className="flex gap-12 justify-center ">
      <div className="bg-white p-10 my-3 mt-16 ml-10 w-[60vw] rounded-lg">
        <div className="flex justify-between mb-5 items-center ">
          <div>
            <h1 className="text-xl"> Shopping Cart</h1>
          </div>
          <p className="text-xs -mb-10">Price</p>
        </div>
        <CustomHR />
        {cart.map((item: Product) => {
          return <CartItem key={item.id} item={item} />;
        })}

        <div className="text-end">
          <Subtotal items={cart.length} price={total} />
        </div>
      </div>
      <div className="bg-white mt-16 h-52 rounded-lg">
        <div className="flex gap-2 p-4">
          <div className="bg-[#1f7611] h-5 w-5 text-white rounded-full items-center">
            <Check size={20} />
          </div>
          <div className="flex flex-col justify-center ">
            <p className="text-[#2a7b17] ">
              Your order qualifies for FREE Shipping.
            </p>
            <p className="text-sm flex gap-2">
              Choose this option at checkout.
              <ProductLinkText>
                <span className="text-[#387d91]"> See details</span>
              </ProductLinkText>
            </p>
          </div>
        </div>

        <div className="mb-5 mt-2">
          <Subtotal items={cart.length} price={total} />
        </div>
        <div className="text-center ">
          <CustomButton
            onClick={() => router.push("/checkout")}
            style={{
              backgroundColor: "#f6d829",
              color: "black",
              width: "90%",
              borderRadius: "20px",
            }}
          >
            Proceed to Checkout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
