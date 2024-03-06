import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
const DeliveryOptions = () => {
  const options = [
    {
      name: "Tomorrow Morning",
      price: "$2.99 - Delivery",
    },
    {
      name: "Tomorrow afternoon",
      price: "FREE One Day Delivery",
    },
    {
      name: "Friday",
      price: "FREE Amazon Day Delivery",
    },
  ];
  return (
    <div>
      <p>Choose your Prime delivery option:</p>
      <RadioGroup defaultValue="friday">
        {options.map((option) => {
          return (
            <div key={option.name}>
              <div className="flex items-center space-x-3 space-y-3">
                <RadioGroupItem value={option.name} id="r1" />
                <div>
                  <Label htmlFor="r1" className="text-[#1f7611]">
                    {option.name}
                  </Label>
                  <p>{option.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </RadioGroup>

      <div />
    </div>
  );
};

export default DeliveryOptions;
