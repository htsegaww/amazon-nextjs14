import { getRandomNumber } from "@/utils";
import React, { useEffect, useState } from "react";

const InStock = () => {
  const [inStock, setInStock] = useState(0);

  useEffect(() => {
    setInStock(getRandomNumber(10));
  }, []);
  return (
    <div>
      <p className="text-[#ba3d22] text-sm font-bold mt-1">
        Only {inStock} left in stock - order soon.
      </p>
    </div>
  );
};

export default InStock;
