import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import navlogo from "../public/assets/navLogo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed flex flex-col w-full h-[80px] shadow-md z-[100] ease-in-out duration-300 bg-[#FCFCFC]">

      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={navlogo} alt="/" width={100} height={100} />
        </Link>
        <div className="flex">
          <input
            className="w-[470px] h-[40px] p-3 rounded-3xl outline-none text-xs bg-[#efefef]"
            placeholder="잃어버린 물건을 검색해주세요"
          />
        </div>
      </div>

      {/* 반응형 Nav */}
      <div className=""></div>
    </nav>
  );
};

export default NavBar;
