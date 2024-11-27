// PlanItem.tsx
import Typography from "@mui/material/Typography";
import React from "react";

interface PlanItemProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}

interface PlanItem {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}

export const planItems: PlanItem[] = [
  {
    iconSrc: "assets/images/plan-icon/Frame.png",
    altText: "Rate Limiting",
    title: "Rate Limiting",
    description:
      "Defined per month to help you manage costs and plan usage effectively.",
  },
  {
    iconSrc: "assets/images/plan-icon/speed-limit.png",
    altText: "Rate Limiting",
    title: "Rate Limiting",
    description: "Ensures fair use and protects the API service from overload.",
  },
  {
    iconSrc: "assets/images/plan-icon/new-features.png",
    altText: "Feature Access",
    title: "Feature Access",
    description:
      "Higher tiers unlock more data types and higher-quality assets.",
  },
  {
    iconSrc: "assets/images/plan-icon/help.png",
    altText: "Support Levels",
    title: "Support Levels",
    description:
      "Faster response times and dedicated support at higher tiers enhance reliability for your business operations.",
  },
];

export const Considerate: React.FC<PlanItemProps> = ({
  iconSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 flex-1">
      <div className="w-[64px] h-[64px] bg-[#E6F7FF] flex justify-center items-center rounded-[8px]">
        <img src={iconSrc} alt={altText} />
      </div>
      <Typography className="text-[16px] font-bold text-center">
        {title}
      </Typography>
      <Typography className="text-xl text-gray-600 text-center px-[50px]">
        {description}
      </Typography>
    </div>
  );
};

export default Considerate;
