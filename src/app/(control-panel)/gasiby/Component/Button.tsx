import Button from "@mui/material/Button";
import React from "react";

type ChooseButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
};

function ChooseButton({ onClick, isSelected }: ChooseButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`w-full py-24 px-16 rounded-full border text-xl border-gasbiprimarycolor-500 ${isSelected ? "bg-gasbiprimarycolor-500 text-white" : "bg-gasbiprimarycolor-50 text-gasbiprimarycolor-500"} hover:bg-gasbiprimarycolor-100 transition-all`}
    >
      Choose Plan
    </Button>
  );
}
export default ChooseButton;
