import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import navlogo from "../../public/assets/navLogo.png";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/router";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNavBar = () => {
    setNav(!nav);
  };

  // TODO : custom Hook을 통해 상채 가져오기
  const { isLoggedIn, handleLogout } = useLogin();
  let isAdmin;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    isAdmin = localStorage.getItem("admin");
  }

  return (
    <nav className=" fixed flex flex-col  w-full h-[110px] shadow-md z-[100] ease-in-out duration-300 bg-[#FCFCFC]">
      <div className="hidden md:flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <Link href="/main">
          <Image src={navlogo} alt="/" width={100} height={100} />
        </Link>
        <div className="hidden md:flex">
          <input
            className="w-[480px] h-[40px] p-3 rounded-3xl outline-none text-xs bg-[#efefef]"
            placeholder="잃어버린 물건을 검색해주세요"
          />
        </div>
      </div>
      <div className="ml-[600px] w-[350px] mb-2">
        <ul className="hidden md:flex justify-between m-auto text-sm uppercase">
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/main">홈</Link>
          </li>
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/qrscan">입소 인증하기</Link>
          </li>
          {isAdmin === "1" && isLoggedIn ? (
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <Link href="/allenter">전체 입소현황</Link>
            </li>
          ) : (
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <Link href="/enter">입소현황</Link>
            </li>
          )}
          {isAdmin === "1" && isLoggedIn ? (
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <Link href="/noticepost">공지작성</Link>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <button onClick={handleLogout} className="bg-[#fff] shadow-none">
                로그아웃
              </button>
            </li>
          ) : (
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <Link href="/login">로그인</Link>
            </li>
          )}
        </ul>

        <div onClick={handleNavBar} className="ml-[100px] pt-10 md:hidden">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {/* 반응형 Nav */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-full bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center">
            <Link href="/main">
              <Image src={navlogo} alt="/" width={100} height={100} />
            </Link>
              <div
                onClick={handleNavBar}
                className="flex ml-auto rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="ml-4 uppercase text-[28px] py-4">
              <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                <Link href="/main">홈</Link>
              </li>
              <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                <Link href="/qrscan">입소 인증하기</Link>
              </li>
              {isAdmin === "1" && isLoggedIn ? (
                <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                  <Link href="/allenter">전체 입소현황</Link>
                </li>
              ) : (
                <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                  <Link href="/enter">입소현황</Link>
                </li>
              )}
              {isAdmin === "1" && isLoggedIn ? (
                <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                  <Link href="/noticepost">공지작성</Link>
                </li>
              ) : null}
              {isLoggedIn ? (
                <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer mb-4">
                  <button
                    onClick={handleLogout}
                    className="bg-[#ECF0F3] shadow-none"
                  >
                    로그아웃
                  </button>
                </li>
              ) : (
                <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
                  <Link href="/login">로그인</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
