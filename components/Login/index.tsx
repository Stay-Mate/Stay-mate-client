import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      // JWT 토큰을 클라이언트에 저장하는 코드 작성
      localStorage.setItem("token", data.token);
      console.log("success");
      router.push("/");
    } else {
      // 로그인 실패 처리
      console.log("Sorry");
    }
  };

  return (
    <div className="fixed w-screen h-full flex bg-white">
      <div className="w-[450px] h-screen bg-[#FFB4B4]"></div>
      <div>
        <div className="w-[400px] h-[230px] ml-[300px] mt-[130px] text-center ">
          <h2 className="font-normal text-[#EA7589] font-mono">LOG IN</h2>
          <form
            className="w-full h-full bg-slate-500] mt-[150px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <div className="mr-[350px] text-gray-500">이메일</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <div className="mt-2 flex flex-col">
              <div className="mr-[340px] text-gray-500">비밀번호</div>
              <input
                className="pt-3 pb-2 mb-4 outline-none border-b-2 text-gray-600"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>
            <br />
            <button
              className="w-[140px] h-[40px] uppercase bg-[#ff9391] text-[#fff]"
              type="submit"
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
