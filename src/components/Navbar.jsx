import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import logoImg from "../assets/images/logo.svg";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="cursor-pointer">
          <img className="w-28" src={logoImg} alt="netflix" />
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 cursor-pointer">계정</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-5 py-3 rounded cursor-pointer"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 cursor-pointer">로그인</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-5 py-3 rounded cursor-pointer">
              시작하기
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
