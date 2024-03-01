import React from "react";

const Subtotal = ({ items, price }: { items: number; price: number }) => {
  return (
    <div className="text-xl ml-3">
      {" "}
      Subtotal({items} items): <span className="font-bold">${price}</span>
    </div>
  );
};

export default Subtotal;
