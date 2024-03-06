import React from "react";
import CustomBox from "./CustomBox";

const OrderTotal = ({ totalPrice }: { totalPrice: string }) => {
  return (
    <div className="flex justify-between font-bold">
      <p className="text-[#b12705]">Order Total </p>
      <p className="text-[#b12705] ">${totalPrice}</p>
    </div>
  );
  {
  }
};

export default OrderTotal;
