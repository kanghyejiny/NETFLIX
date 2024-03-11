import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import loginBg from "../assets/images/login_bg.jpg";
import { FiAlertTriangle } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={loginBg}
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[500px] h-[500px] mx-auto bg-black">
            <div className="max-w-[400px] mx-auto py-16">
              <h1 className="text-4xl font-bold pb-4">로그인</h1>
              {error ? (
                <p className="p-3 bg-red-500 w-full flex items-center rounded">
                  <span className="pr-2">
                    <FiAlertTriangle />
                  </span>
                  <span>아이디나 비밀번호를 다시 한번 확인해주세요.</span>
                </p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-black rounded border border-gray-400"
                  type="email"
                  placeholder="이메일 주소 또는 전화번호"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-black border border-gray-400 rounded"
                  type="password"
                  placeholder="비밀번호"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-3 rounded font-semibold">
                  로그인
                </button>
                <div className="text-sm text-gray-300 mt-1">
                  <p>
                    <input
                      className="mr-2 accent-red-700 align-middle cursor-pointer w-4 h-4"
                      type="checkbox"
                    />
                    로그인 정보 저장
                  </p>
                </div>
                <p className="py-4">
                  <span className="font-extralight pr-2">
                    Neflix 회원이 아닌가요?
                  </span>
                  <Link to="/signup">지금 가입하세요.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
