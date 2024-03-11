import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([[]]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie)

  return (
    <div className="w-full h-[650px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[40%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <p className="w-full line-clamp-3 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 pt-4">
            {movie?.overview}
          </p>
          <div className="my-4">
            <button className="inline-flex items-center gap-1.5 border bg-gray-300 text-black border-gray-300 py-2 px-5">
              <span>
                <FaPlay />
              </span>
              <span>재생</span>
            </button>
            <button className="inline-flex items-center gap-1.5 border text-white border-gray-300 py-2 px-5 ml-4">
              <span>
                <FaInfoCircle />
              </span>
              <span>상세 정보</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
