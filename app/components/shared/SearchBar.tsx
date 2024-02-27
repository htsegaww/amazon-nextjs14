import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-[80vw] items-center justify-center mx-5 my-3 ">
      <div className="w-full ">
        <Input
          className="py-5 rounded-none rounded-l-sm"
          placeholder="Search Amazon"
        />
      </div>
      <div className=" h-[42px] w-[42px] flex items-center justify-center bg-[#febe68] rounded-r-sm">
        <Search size={22} className="text-[#705732]" />
      </div>
    </div>
  );
};

export default SearchBar;
