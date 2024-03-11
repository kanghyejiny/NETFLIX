import React from "react";
import logoImg from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="cursor-pointer">
        <img className="w-28" src={logoImg} alt="netflix" />
      </h1>
      <div>
        <button className="pr-4 cursor-pointer">로그인</button>
        <button className="bg-red-600 px-5 py-3 rounded cursor-pointer">
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Navbar;
