import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import navlogo from "../../public/assets/navLogo.png";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/router";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isLoggedIn, handleLogout } = useLogin();
  let isAdmin;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    isAdmin = localStorage.getItem("admin");
  }
  const handleNavBar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen size breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <nav className="fixed w-full h-[110px] shadow-md z-[100] ease-in-out duration-300 bg-[#FCFCFC]">
      <div className="flex flex-col">
        <div className="hidden md:flex justify-center items-center w-full h-full px-2 2xl:px-16">
          <Link href="/main">
            <Image src={navlogo} alt="/" width={100} height={100} />
          </Link>
          <div className="mb-1">
            <div className="hidden md:flex">
              <input
                className="w-[400px] h-[40px] p-3 rounded-3xl outline-none text-xs bg-[#efefef]"
                placeholder="잃어버린 물건을 검색해주세요"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-[350px] m-auto">
          <ul className="flex justify-between w-full h-5 m-auto text-sm">
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
              <Link href="/main">홈</Link>
            </li>
            <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
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

      <div className="flex justify-end mr-[20px] md:hidden pt-6">
        {isMobile ? (
          <AiOutlineMenu size={25} onClick={handleNavBar} />
        ) : (
          <AiOutlineMenu size={30} onClick={handleNavBar} />
        )}
      </div>

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
            <ul className="ml-4 uppercase text-[20px] py-4">
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
                    className="bg-none shadow-none"
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
