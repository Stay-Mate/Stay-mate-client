import { useLogin } from "@/hooks/useLogin";
import Router from "next/router";
import React, { useState } from "react";

export const Profile = () => {
  const { isLoggedIn, handleLogout } = useLogin();

  return (
    <div className="col-span-3 w-[280px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB] mr-[150px]">
      <div className="w-[180px] h-[180px] bg-[#FCF7B6] rounded-[50%] mx-auto" />
      <div className="w-full h-[30px]  text-center mt-4">김사감</div>
      <div>
        <button
          className=" w-[250px] h-[30px] mb-2 bg-[#FF8080] text-[#fff]"
          onClick={() => {
            Router.push("/checkin");
          }}
        >
          입소현황
        </button>

        {isLoggedIn ? (
          <button
            className=" w-[250px] h-[30px]"
            onClick={() => {
              Router.push("/login");
            }}
          >
            로그아웃
          </button>
        ) : (
          <button
            className="mt-7 w-[250px] h-[30px]"
            onClick={() => {
              Router.push("/login");
            }}
          >
            로그인
          </button>
        )}

        {isLoggedIn ? null : (
          <button
            className="mt-2 w-[250px] h-[30px]"
            onClick={() => {
              Router.push("/signup");
            }}
          >
            회원가입
          </button>
        )}
      </div>
    </div>
  );
};
