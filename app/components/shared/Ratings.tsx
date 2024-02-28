import Image from "next/image";
import React from "react";

const Ratings = ({ rating }: { rating: any }) => {
  return (
    <div className="flex">
      <div className="mr-[0.5rem] flex">
        <Image alt="start" src="/star-icon.png" height={20} width={20} />
        <Image alt="start" src="/star-icon.png" height={20} width={20} />
        <Image alt="start" src="/star-icon.png" height={20} width={20} />
        <Image alt="start" src="/star-icon.png" height={20} width={20} />
        <Image alt="start" src="/star-icon.png" height={20} width={20} />
      </div>
      <div className="font-bold text-[#a4c4cc] hover:text-orange-500">
        {rating.count}
      </div>
    </div>
  );
};

export default Ratings;
