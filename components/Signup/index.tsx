import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const [name, setName ] = useState("");
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
      body: JSON.stringify({ name, email, password, room_number}),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      // JWT 토큰을 클라이언트에 저장하는 코드 작성
      localStorage.setItem("token", data.token);
      console.log("success");
      router.push("/");
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
            className="w-full h-full bg-slate-500] mt-[150px]"
            onSubmit={handleSubmit}
          >
            <div >
              <div>name</div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <div >
              <div >email</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <div>
              <div >password</div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>
            <div>
              <div>Room</div>
              <input
                value={room_number}
                onChange={(e) => {
                  setRoomNumber(e.target.value)
                }}
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <button
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
