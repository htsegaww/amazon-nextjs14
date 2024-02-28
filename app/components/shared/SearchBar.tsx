"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //when we submit the form, this takes us to the specific route
    router.push(`/search/${query}/`);
  };

  // console.log(query);
  return (
    <form
      className="flex w-[80vw] items-center justify-center mx-5 my-3 "
      onSubmit={searchProducts}
    >
      <div className="w-full ">
        <Input
          className="py-5 rounded-none rounded-l-sm text-slate-800 outline-none"
          placeholder="Search Amazon"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        className=" h-[42px] w-[42px] flex items-center justify-center bg-[#febe68] rounded-r-sm"
        type="submit"
      >
        <Search size={22} className="text-[#705732]" />
      </button>
    </form>
  );
};

export default SearchBar;
