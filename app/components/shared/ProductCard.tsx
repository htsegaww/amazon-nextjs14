import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, MouseEventHandler } from "react";
import Ratings from "./Ratings";
import { useRouter } from "next/navigation";
import { Product } from "@/types/supabase";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const selectProduct = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    router.push(`/product/${product.id}`);
  };
  return (
    <div onClick={selectProduct}>
      <Link
        href={`/products/${product.id}`}
        className="flex flex-col bg-white h-[450px] w-[240px] my-5 mx-3 justify-between items-center"
      >
        <Image
          alt={product.title!}
          src={product.image!}
          width={200}
          height={255}
        />
        <div className="flex flex-start flex-col w-60 ml-5 gap-1">
          <div className="text-lg text-black">
            {product.title!.substring(0, 15)}...
          </div>
          <div>
            <Ratings rating={product.rating} />
          </div>
          <div className="font-extrabold">${product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
