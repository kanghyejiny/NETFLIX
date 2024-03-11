import React from "react";
import loginBg from "../assets/images/login_bg.jpg";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div>
        <img className="w-full h-[400px] object-cover" src={loginBg} alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md: text-5xl font-bold">나의 넷플릭스</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
