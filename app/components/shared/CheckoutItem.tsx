import React from "react";
import CustomBox from "./CustomBox";
import { Product } from "@/types/supabase";
import Image from "next/image";
import DeliveryOptions from "./DeliveryOptions";

const CheckoutItem = ({ item }: { item: Product }) => {
  return (
    <CustomBox
      style={{
        marginLeft: "-250px",
        marginTop: "40px",
        width: "45vw",
        paddingRight: "80px",
      }}
    >
      <div className="flex py-5 justify-between">
        <div>
          <Image alt={item.title!} src={item.image!} width={70} height={100} />
        </div>
        <div>
          <p className="font-bold w-80">{item.title}</p>
          <p className="text-[#b12705] font-bold">${item.price}</p>
        </div>
        <DeliveryOptions />
      </div>
    </CustomBox>
  );
};

export default CheckoutItem;
