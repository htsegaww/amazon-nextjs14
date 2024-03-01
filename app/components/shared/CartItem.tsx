import { Product } from "@/types/supabase";
import Image from "next/image";
import React from "react";
import InStock from "./InStock";
import CustomHR from "./CustomHR";

import { useAppDispatch } from "@/hooks/redux";
import { removeItem } from "@/store/cartSlice";
// import { Button } from "@/components/ui/button";

const CartItem = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-between mb-6  ">
        <div className="flex gap-3">
          <Image alt={item.title!} src={item.image!} width={225} height={257} />
          <div className="flex flex-col gap-2">
            <p>{item.title}</p>
            <InStock />
            <p className="text-xs">Eligible for FREE Shipping & FREE Returns</p>
            <button
              className="text-[#5595dc] text-start"
              onClick={() => dispatch(removeItem(item))}
            >
              Delete
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg">${item.price}</p>
        </div>
      </div>
      <CustomHR />
    </div>
  );
};

export default CartItem;
