import Typography from "@mui/material/Typography";
import React from "react";
import Avatar from "./Data.json";
export const Movie = Avatar.Movie;
interface PlanItemProps {
  movie: string;
  alter: string;
}

export const Consider: React.FC<PlanItemProps> = ({ movie, alter }) => {
  return (
    <div className="flex flex-col gap-12 w-full items-center text-center">
      <img
        src={movie}
        alt="Movie Poster"
        className="object-cover w-full h-auto border border-gasbiprimarycolor-800 rounded-full"
        style={{ borderWidth: "5px" }}
      />
      <div className="object-cover text-grey-700 font-600 text-xl">{alter}</div>
    </div>
  );
};

export default Consider;
