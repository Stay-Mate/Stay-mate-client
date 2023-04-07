import Router from "next/router";
import React, { useState } from "react";

export const LostpostList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    // <div className="col-span-3 lg:col-span-2 w-[400px] h-[300px] shadow-xl shadow-gray-400 rounded-xl p-4">aaa</div>
    <div>
      <div className="col-span-3 w-[500px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB] ml-[100px]">
        <div className="flex w-full h-[45px] ">
        <div className="w-[45px] h-full bg-orange-700 rounded-[50%]"></div>
        <div className="w-[75px] h-full  text-center text-xl pt-2">심미진</div>
        </div>
      </div>
    </div>
  );
};
