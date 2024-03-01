import React, { CSSProperties, ReactNode } from "react";

const CustomBox = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div
      className="border border-gray-200 rounded-sm w-[240px] py-3 px-5 -ml-14"
      style={{
        display: "flex",
        flexDirection: "column",

        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CustomBox;
