import Router from "next/router";
import React, { useState } from "react";

export const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="col-span-3 w-[280px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB] mr-[150px]">
      <div className="w-[180px] h-[180px] bg-[#FCF7B6] rounded-[50%] mx-auto" />
      <div className="w-full h-[30px]  text-center mt-4">김사감</div>
      <div>
        <div className="w-[250px] h-[150px] mt-2 mb-4">
          <textarea
            className="p-2 w-full h-full outline-none text-gray-500"
            placeholder="공지 내용을 입력해 주세요."
          ></textarea>
        </div>

        <div className="flex mb-2">
          <button className="mr-3 w-[120px] h-[40px] bg-[#877F8F] text-[#fff]" onClick={() => {
            Router.push('/noticelist')
          }}>
            최근 공지
          </button>
          <button className="w-[120px] h-[40px] bg-[#303261] text-[#fff]">
            공지 하기
          </button>
        </div>

        <button
          className=" w-[250px] h-[30px] mb-2 bg-[#FF8080] text-[#fff]"
          onClick={() => {
            Router.push("/checkin");
          }}
        >
          입소현황
        </button>
        <button className=" w-[250px] h-[30px] mb-2 bg-[#df3535cb] text-[#fff]">
          분실물 신고하기
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
