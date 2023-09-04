import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";
import React, { useEffect, useState } from "react";

export default function Login() {
  const { email, setEmail, password, setPassword, handleSubmit } = useLogin();
  const [emailValid, setEmaiValid] = useState(true);
  const [passwordlValid, setPasswordValid] = useState(true);
  return (
    <div className="fixed w-screen h-full flex bg-white">
      <div className="w-[450px] h-screen bg-[#FFB4B4]"></div>
      <div className="w-full pt-14">
        <div className="w-[400px] h-[230px] m-auto text-center">
          <h2 className="font-normal text-[#EA7589] font-mono">LOG IN</h2>
          <form
            className="w-full h-full bg-slate-500] mt-[150px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <div className="mr-[340px] text-gray-500">이메일</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  setEmaiValid(value.includes("@bssm.hs.kr"));
                }}
                placeholder="이메일을 입력해주세요"
                required
              />
              {!emailValid ? (
                <p className="w-[260px] mr-40 text-red-700">
                  {"@bssm.hs.kr"} 를 포함하여 입력하세요.
                </p>
              ) : (
                <p className="w-[260px] mr-40 mb-3">
                  {"@bssm.hs.kr"}를 포함하여 입력하세요.
                </p>
              )}
            </div>
            <div className="mt-2 flex flex-col">
              <div className="mr-[340px] text-gray-500">비밀번호</div>
              <input
                className="pt-3 pb-2 mb-2 outline-none border-b-2 text-gray-600"
                type="password"
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  setPasswordValid(value.length >= 8);
                }}
                placeholder="비밀번호를 입력해주세요"
                required
              />
              {!passwordlValid ? (
                <p className="w-[160px] mr-40 text-red-700">
                  {" "}
                  8자리 이상 입력하세요.
                </p>
              ) : (
                <p className="w-[160px] mr-40 mb-3"> 8자리 이상 입력하세요.</p>
              )}
            </div>
            <br />
            <button
              className="w-[140px] h-[40px] uppercase bg-[#ff9391] text-[#fff]"
              type="submit"
              disabled={!emailValid || !passwordlValid}
            >
              log in
            </button>
            <br />
            <Link className="text-[12px]" href="/signup">
              아직 계정이 없습니까?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
