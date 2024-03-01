"use client";
import { Product } from "@/types/supabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ratings from "./Ratings";
import CustomHR from "./CustomHR";
import ProductLinkText from "./ProductLinkText";
import CustomBox from "./CustomBox";
import { MapPin } from "lucide-react";
import { getRandomNumber } from "@/utils";
import InStock from "./InStock";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

import { addToCart } from "@/store/cartSlice";
import { useAppDispatch } from "@/hooks/redux";

const ProductDetails = ({ product }: { product: any[] }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setHours(getRandomNumber(12));
    setMinutes(getRandomNumber(59));
  }, []);
  return (
    <div>
      <div>
        {product.map((prod) => {
          return (
            <div key={prod.id} className="flex justify-evenly">
              <Image
                src={prod.image!}
                alt={prod.title!}
                height={500}
                width={400}
              />
              <div className="flex flex-col">
                <h1>{prod.title}</h1>
                <Ratings rating={prod.rating} />
                <CustomHR />
                <span className="text-xl font-bold">${prod.price}</span>
                <ProductLinkText>FREE Returns</ProductLinkText>
                <span className="text-sm ">
                  Available at a lower price from other sellers that may not
                  offer free Prime shipping.
                </span>
                <CustomHR />

                <p className="max-w-[600px] flex flex-col ">
                  <span className="font-bold">Description</span>
                  <span className="text-sm">{prod.description}</span>
                </p>
              </div>
              <div className="mb-10">
                <CustomBox>
                  <Image
                    alt="prime-logo"
                    src="/prime-logo.png"
                    height={30}
                    width={50}
                  />

                  <p className="font-bold text-sm">
                    Enjoy fast, free delivery, exclusive deals, and
                    award-winning moves & TV shows with Prime.
                  </p>
                  <p className="text-sm">
                    <span className="text-[#017085]">Try Prime </span>
                    and start saving today with{" "}
                    <span className="font-bold ">fast, free delivery</span>
                  </p>
                </CustomBox>
                <CustomBox style={{ marginTop: "0.25rem" }}>
                  <span className="font-bold">${prod.price}</span>
                  <ProductLinkText>
                    <p className="text-sm m-1 ">FREE Returns</p>
                  </ProductLinkText>
                  <div className="flex gap-1  ">
                    <ProductLinkText>
                      <p className="text-sm">FREE Delivery</p>
                    </ProductLinkText>

                    <span className="font-bold text-sm">in 2 days</span>
                  </div>
                  <p className=" text-sm">
                    Or fastest delivery
                    <span className="font-bold ml-1 ">tomorrow</span>.
                  </p>
                  <p className=" text-xs">
                    Order within
                    <span className=" ml-1 text-[#1f7611] ">
                      {hours} hrs and {minutes} mins
                    </span>
                  </p>
                  <p className="flex items-center justify center gap-1 mt-3">
                    <MapPin size={20} />{" "}
                    <span className="text-xs text-[#387d91]">
                      Deliver to New York 10011
                    </span>
                  </p>
                  <InStock />

                  <CustomButton
                    style={{
                      backgroundColor: "#f6d829",

                      color: "black",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      dispatch(addToCart(prod));
                      router.push("/cart");
                    }}
                  >
                    ADD TO CART
                  </CustomButton>
                  <CustomButton
                    style={{
                      backgroundColor: "#f5bd6a",
                      color: "black",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                    onClick={() => router.push("/checkout")}
                  >
                    BUY NOW
                  </CustomButton>

                  <p className="flex items-center justify-between text-xs mb-1">
                    <span>Ships from</span>
                    <span>Amazon</span>
                  </p>
                  <p className="flex items-center justify-between text-xs mb-1">
                    <span>Returns</span>
                    <span className="text-[#387d91]">Eligible</span>
                  </p>
                  <p className="flex items-center justify-between text-xs">
                    <span>Payment</span>
                    <span className="text-[#387d91]">Secure transaction</span>
                  </p>
                </CustomBox>
              </div>
            </div>
          );
        })}
        <CustomHR />
        <p className="font-bold mt-3">BUY IT WITH </p>
      </div>
    </div>
  );
};

export default ProductDetails;
