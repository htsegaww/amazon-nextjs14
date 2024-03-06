import React from "react";
import CustomBox from "./CustomBox";
import CustomButton from "./CustomButton";
import CustomHR from "./CustomHR";
import OrderTotal from "./OrderTotal";
import ProductLinkText from "./ProductLinkText";

const OrderSummary = ({
  subtotal,
  tax,
  total,
}: {
  subtotal: number;
  tax: string;
  total: string;
}) => {
  const summaryValues = [
    { title: "subtotal(1 items", value: ` $${subtotal}` },
    { title: "Shipping & handling", value: "$0.00" },
    { title: "Total before tax", value: ` $${subtotal}` },
    { title: "Estimated tax to be collected", value: ` $${tax}` },
  ];
  return (
    <CustomBox style={{ height: "100%", width: "330px", display: "flex" }}>
      <div>
        <CustomButton
          onClick={() => console.log()}
          style={{
            backgroundColor: "#f6d829",
            color: "black",
            width: "100%",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        >
          Place your Order
        </CustomButton>
      </div>
      <div>
        <p className="text-xs w-72">
          By placing your order, you agree to Amazon&apos;s
          <span className="text-[#5d93a3]"> privacy notice </span>
          and
          <span className="text-[#5d93a3]"> conditions of use.</span>
        </p>
      </div>
      <CustomHR />
      <h1 className="font-bold text-lg">Order Summary</h1>
      <div>
        {summaryValues.map((value) => {
          return (
            <>
              <div className="flex justify-between" key={value.title}>
                <p>{value.title}</p>

                <p>{value.value}</p>
              </div>
              {value.title === summaryValues[1].title && <CustomHR />}
            </>
          );
        })}
        <CustomHR />
        <OrderTotal totalPrice={total} />
        <CustomHR />

        <div className="bg-[#e3e6e6] p-3 flex flex-col gap-2 w-72 text-sm mt-6">
          <ProductLinkText>How are shipping costs calculated?</ProductLinkText>
          <p>Prime shipping benefits have been applied to your order.</p>
        </div>
      </div>
    </CustomBox>
  );
};

export default OrderSummary;
