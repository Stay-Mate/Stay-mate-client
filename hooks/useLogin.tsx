import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn을 true로 설정
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    handleLogout,
    isLoggedIn,
  };
};
