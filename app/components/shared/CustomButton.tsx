import { Button } from "@/components/ui/button";
import React, { CSSProperties, ReactNode } from "react";

const CustomButton = ({
  style,
  children,
  onClick,
}: {
  children: ReactNode;
  style?: CSSProperties;
  onClick: () => void;
}) => {
  return (
    <div>
      <Button style={{ margin: "5px", ...style }} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
