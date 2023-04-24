import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [room_number, setRoomNumber] = useState("");

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
      console.log("Sorry");
    }
  };

  return (
    <div className="fixed w-screen h-full flex bg-white">
      <div className="w-[450px] h-screen bg-[#FFB4B4]"></div>
      <div>
        <div className="w-[400px] h-[230px] ml-[300px] mt-[130px] text-center ">
          <h2 className="font-normal text-[#EA7589] font-mono">SIGN UP</h2>
          <form
            className="w-full h-full bg-slate-500] mt-[80px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <div className="mr-96 text-gray-500">name</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요."
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <div className="mr-96 text-gray-500">email</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <div className="mr-96 text-gray-500">password</div>
              <input
                className="pt-3 pb-2 outline-none border-b-2 text-gray-600"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요."
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <div className="mr-96 text-gray-500">Room</div>
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
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
