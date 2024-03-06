import React from "react";
import Logo from "./Logo";
import { LockKeyhole } from "lucide-react";
import ProductLinkText from "./ProductLinkText";

const CheckoutHeader = ({ items }: { items: number }) => {
  return (
    <div>
      <div className="bg-[#e3e6e6] ">
        <div className=" flex justify-evenly p-6 items-center -ml-32">
          <div>
            <Logo dark />
          </div>
          <div>
            <p className="flex gap-1">
              Checkout
              <ProductLinkText>
                ({items} {items > 1 ? "items" : "item"}
              </ProductLinkText>
              )
            </p>
          </div>
          <div>
            <LockKeyhole />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
