import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import navlogo from "../../public/assets/navLogo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed flex flex-col  w-full h-[110px] shadow-md z-[100] ease-in-out duration-300 bg-[#FCFCFC]">
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={navlogo} alt="/" width={100} height={100} />
        </Link>
        <div className="flex">
          <input
            className="w-[480px] h-[40px] p-3 rounded-3xl outline-none text-xs bg-[#efefef]"
            placeholder="잃어버린 물건을 검색해주세요"
          />
        </div>
      </div>
      <div className="ml-[600px] w-[350px] mb-2">
        <ul className="flex justify-between m-auto text-sm uppercase">
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/main">홈</Link>
          </li>
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/allenter">입소현황</Link>
          </li>
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/noticepost">공지작성</Link>
          </li>
          <li className="mr-2 hover:text-[#B2A4FF] cursor-pointer">
            <Link href="/login">로그인</Link>
          </li>
        </ul>
      </div>

      {/* 반응형 Nav */}
      <div className=""></div>
    </nav>
  );
};

export default NavBar;
