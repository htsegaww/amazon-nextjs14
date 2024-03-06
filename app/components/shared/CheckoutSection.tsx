import React, { CSSProperties, ReactNode } from "react";
import CustomHR from "./CustomHR";

const CheckoutSection = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="ml-64 m-4 ">
      <div className="flex gap-10">
        <div className="flex gap-3 ">
          <h1 className="font-bold">{number}</h1>
          <h2 className=" font-bold">{title}</h2>
        </div>
        <div className="text-sm flex gap-10">{children}</div>
      </div>
      <div className="w-[790px]">
        <CustomHR />
      </div>
    </div>
  );
};

export default CheckoutSection;
