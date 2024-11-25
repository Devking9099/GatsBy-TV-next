import Typography from "@mui/material/Typography";
import React from "react";

interface PlanItemProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  avatar: string;
  hard: string;
  movie: string;
}

interface PlanItem {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  avatar: string;
  hard: string;
  movie: string;
}

export const planItems: PlanItem[] = [
  {
    iconSrc: "assets/images/home/avatar.png",
    altText: "Rate Limiting",
    title: "Rate Limiting",
    description: "Period dramas that make you wish you had a time machine",
    avatar: "assets/images/home/user.png",
    hard: "assets/images/home/sm_heart.png",
    movie: "assets/images/home/movie.png",
  },
  {
    iconSrc: "assets/images/home/avatar.png",
    altText: "Rate Limiting",
    title: "Rate Limiting",
    description: "Period dramas that make you wish you had a time machine",
    avatar: "assets/images/home/user.png",
    hard: "assets/images/home/sm_heart.png",
    movie: "assets/images/home/movie.png",
  },
  {
    iconSrc: "assets/images/home/avatar.png",
    altText: "Feature Access",
    title: "Feature Access",
    description: "Period dramas that make you wish you had a time machine",
    avatar: "assets/images/home/user.png",
    hard: "assets/images/home/sm_heart.png",
    movie: "assets/images/home/movie.png",
  },
];

export const Considerate: React.FC<PlanItemProps> = ({
  iconSrc,
  altText,
  title,
  description,
  avatar,
  hard,
  movie,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 flex-1 rounded-lg border border-solid p-68 border-gray-100 bg-white shadow-md">
      <div className="w-full h-auto flex justify-center items-center rounded-[8px]">
        <img src={iconSrc} alt={altText} />
      </div>
      <Typography className="text-3xl text-gray-600 text-start">
        {description}
      </Typography>
      <div className="flex justify-between w-full pt-24">
        <div className="flex items-center gap-6">
          <img src={avatar} />
          <span className="text-center text-gray-600">username</span>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-6">
            <img src={hard} />
            <span className="text-center text-gray-800">2943</span>
          </div>

          <div className="flex items-center gap-6">
            <img src={movie} />
            <span className="text-center text-gray-800">79</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Considerate;
