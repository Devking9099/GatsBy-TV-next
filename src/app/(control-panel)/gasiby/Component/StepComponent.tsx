// StepComponent.tsx
import React from "react";

interface Step {
  icon: string;
  title: string;
  description: string;
}

const StepComponent: React.FC<{ item: Step }> = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center p-20 sm:w-[calc(100%-24px)] md:w-[calc(33.3%-24px)] w-full rounded-lg border border-[#F3F4F6] bg-white shadow-md">
      <div className="flex items-center justify-center w-full p-14 gap-[20px]">
        <img src={item.icon} alt={item.title} className="size-[40px]" />
        <div className="w-full">
          <h2 className="text-lg font-bold mb-2 text-start md:text-center">
            {item.title}
          </h2>
          <p className="text-[14px] text-gray-700 text-start md:text-center">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
