import React, { useState, FormEvent, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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

    if (data.success) {
      // JWT 토큰을 클라이언트에 저장하는 코드 작성
      localStorage.setItem("token", data.token);
      setIsAdmin(data.isAdmin);
      console.log("success");
      router.push("/main");
    } else {
      // 로그인 실패 처리
      console.log("Sorry");
    }
  };

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    router.push("/");
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    handleLogout,
    isLoggedIn,
    isAdmin,
  };
};
