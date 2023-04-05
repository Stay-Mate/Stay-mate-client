import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function LoginWrap() {
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
    // console.log(response);
    
    const data = await response.json();
    console.log(data);
    
    if (data.success) {
      // JWT 토큰을 클라이언트에 저장하는 코드 작성
      console.log("success");
      router.push("/");
    } else {
      // 로그인 실패 처리
      console.log("Sorry");
    }
  };

  return (
    <div className="fixed w-screen h-full flex">
      <div className="w-[450px] h-screen bg-[#FFB4B4]"></div>
      <div>
        <div className="w-[400px] h-[230px] ml-[300px] mt-[130px] text-center ">
          <h2 className="font-normal text-[#EA7589] font-mono">LOG IN</h2>
          <form
            className="w-full h-full bg-slate-500] mt-[150px]"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 mb-4 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              className="p-2 mb-4 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
