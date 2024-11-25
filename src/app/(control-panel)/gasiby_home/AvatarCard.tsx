import Typography from "@mui/material/Typography";
import React from "react";

interface PlanItemProps {
  movie: string;
  alter: string;
}

export const Movie: PlanItemProps[] = [
  {
    movie: "assets/images/home/avatar4.png",
    alter: "Queen Charlotte: A Bridgerton Story",
  },
  {
    movie: "assets/images/home/avatar1.png",
    alter: "3 Body Problem",
  },
  {
    movie: "assets/images/home/avatar2.png",
    alter: "Bridgerton",
  },
  {
    movie: "assets/images/home/avatar3.png",
    alter: "Suits",
  },
  {
    movie: "assets/images/home/avatar1.png",
    alter: "Queen Charlotte: A Bridgerton Story",
  },
  {
    movie: "assets/images/home/avatar2.png",
    alter: "3 Body Problem",
  },
  {
    movie: "assets/images/home/avatar3.png",
    alter: "Bridgerton",
  },
  {
    movie: "assets/images/home/avatar4.png",
    alter: "Suits",
  },
];

export const Consider: React.FC<PlanItemProps> = ({ movie, alter }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <img src={movie} alt="Movie Poster" />
      <div className="text-center">{alter}</div>
    </div>
  );
};

export default Consider;
