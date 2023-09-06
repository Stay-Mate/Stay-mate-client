import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [room_number, setRoomNumber] = useState("");
  const [emailValid, setEmaiValid] = useState(true);
  const [passwordlValid, setPasswordValid] = useState(true);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, room_number }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      // JWT 토큰을 클라이언트에 저장하는 코드 작성
      localStorage.setItem("token", data.token);
      console.log("success");
      router.push("/login");
    } else {
      // 회원가입 실패 처리
      alert("가입에 실패했습니다. 처음부터 다시 입력해주세요");
    }
  };

  return (
    <div className="fixed w-screen h-full flex bg-white">
      <div className="w-[450px] h-screen bg-[#FFB4B4]"></div>
      <div className="w-full pt-14">
        <div className="w-[400px] h-[230px] m-auto text-center">
          <h2 className="font-normal text-[#EA7589] font-mono uppercase">sign up</h2>
          <form
            className="w-full h-full bg-slate-500] mt-[80px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <div className="w-[30px] mr-96 text-gray-500">이름</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요."
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <div className="w-[44px] mr-96 text-gray-500">이메일</div>
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
                  {" "}
                  {"@bssm.hs.kr"} 를 포함하여 입력하세요.
                </p>
              ) : (
                <p className="w-[260px] mr-40 mb-3">
                  {" "}
                  {"@bssm.hs.kr"}를 포함하여 입력하세요.
                </p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <div className="w-[58px] mr-96 text-gray-500">비밀번호</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                type="password"
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  setPasswordValid(value.length >= 8);
                }}
                placeholder="비밀번호를 입력해주세요."
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
            <div className="flex flex-col mb-4">
              <div className="w-[62px] mr-96 text-gray-500">호실 번호</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={room_number}
                onChange={(e) => {
                  setRoomNumber(e.target.value);
                }}
                placeholder="호실을 입력해주세요. ex. 111"
                required
              />
            </div>
            <button
              className="w-[140px] h-[40px] uppercase bg-[#ff9391] text-[#fff]"
              type="submit"
              disabled={!emailValid || !passwordlValid}
            >
              sign up
            </button>
            <br />
            <Link className="text-[12px]" href="/login">
              현재 계정이 있습니까?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
