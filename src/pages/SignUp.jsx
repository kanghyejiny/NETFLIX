import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import loginBg from "../assets/images/login_bg.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
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
          <div className="max-w-[600px] h-[500px] mx-auto bg-black/60">
            <div className="max-w-[500px] mx-auto py-16">
              <h1 className="text-3xl font-bold text-center pb-4">
                영화, 시리즈 등을 무제한으로
              </h1>
              <span className="block text-center text-gray-400 text-lg">
                어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
              </span>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-white/30 rounded"
                  type="email"
                  placeholder="이메일 주소"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-white/30 rounded"
                  type="password"
                  placeholder="비밀번호를 추가하세요"
                  autoComplete="current-password"
                />
                <div className="text-sm text-gray-300 mt-1">
                  <p>
                    <input
                      className="mr-2 accent-red-700 align-middle cursor-pointer w-4 h-4"
                      type="checkbox"
                    />
                    예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에
                    동의합니다.(상세 정보)
                  </p>
                  <p className="pt-1">
                    <input
                      className="mr-2 align-middle accent-red-700 cursor-pointer w-4 h-4"
                      type="checkbox"
                    />
                    예, 넷플릭스 특별 할인 알림 이메일을 보내주세요.(선택사항)
                  </p>
                </div>
                <button className="bg-red-600 py-3 my-6 rounded font-semibold">
                  시작하기
                </button>
                <p className="py-4">
                  <span className="text-gray-500 pr-2 text-sm">
                    이미 넷플릭스를 구독하고 있어요.
                  </span>
                  <Link to="/login">로그인</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
