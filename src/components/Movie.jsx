import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block rounded"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 ">
        <p className="white-space-normal text-xs md:text-sm font-medium flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
