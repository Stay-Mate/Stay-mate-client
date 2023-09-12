import React, { useState, FormEvent, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
      axios.defaults.headers["x-access-token"] = data.token;
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", data.isAdmin);
      localStorage.setItem("userId", data.userId);
      Swal.fire({
        icon: "success",
        title: "로그인 성공",
      });

      console.log("success");
      
      router.push("/main");
    } else {
      // 로그인 실패 처리
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
      });
    }
  };

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    router.push("/");
    setIsLoggedIn(false);
    delete axios.defaults.headers["x-access-token"];
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("userId");
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
