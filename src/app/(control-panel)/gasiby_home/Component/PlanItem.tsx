import Typography from "@mui/material/Typography";
import React from "react";
import data from "./Data.json";
export const planItems = data.planItems;

interface PlanItem {
  iconSrc1: string;
  iconSrc2: string;
  iconSrc3: string;
  iconSrc4: string;
  altText: string;
  title: string;
  description: string;
  avatar: string;
  hard: string;
  movie: string;
}

export const Considerate: React.FC<PlanItem> = ({
  iconSrc1,
  iconSrc2,
  iconSrc3,
  iconSrc4,
  altText,
  title,
  description,
  avatar,
  hard,
  movie,
}) => {
  return (
    <div className="flex flex-col items-center flex-1 rounded-lg border border-solid p-48 border-gray-100 bg-white shadow-md">
      <div className="flex -space-x-44 items-center">
        <img
          className="inline-block size-96 border border-gasbiprimarycolor-800 rounded-full"
          style={{ borderWidth: "5px" }}
          src={iconSrc1}
          alt="Avatar"
        />
        <img
          className="inline-block size-96 border border-gasbiprimarycolor-800 rounded-full"
          style={{ borderWidth: "5px" }}
          src={iconSrc2}
          alt="Avatar"
        />
        <img
          className="inline-block size-96 border border-gasbiprimarycolor-800 rounded-full"
          style={{ borderWidth: "5px" }}
          src={iconSrc3}
          alt="Avatar"
        />
        <img
          className="inline-block size-96 border border-gasbiprimarycolor-800 rounded-full"
          style={{ borderWidth: "5px" }}
          src={iconSrc4}
          alt="Avatar"
        />
      </div>
      <Typography className="text-3xl text-gray-600 text-start">
        {description}
      </Typography>
      <div className="flex justify-between w-full pt-24">
        <div className="flex items-center gap-6 ">
          <img
            src={avatar}
            className="border border-gasbiprimarycolor-800 rounded-full"
          />
          <span className="text-center text-gray-600">username</span>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-6">
            <img src={hard} />
            <span className="text-center text-gray-800">2943</span>
          </div>

          <div className="flex items-center gap-6 ">
            <img src={movie} />
            <span className="text-center text-gray-800">79</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Considerate;
