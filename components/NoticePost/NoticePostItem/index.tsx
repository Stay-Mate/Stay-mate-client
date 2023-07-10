import React from "react";
import formatDateTime from "@/utils/formDateTime";

interface Props {
  post_id: number;
  created_at: string;
  name: string;
  title: string;
  content: string;
}

export const NoticePostItem = ({
  post_id,
  created_at,
  name,
  title,
  content,
}: Props) => {
  let isAdmin;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    isAdmin = localStorage.getItem("admin");
  }

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="w-96 mb-5">
      <div className="p-4 col-span-3 w-full lg:w-[700px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-6 bg-[#FBFBFB] mr-[50px]">

        <div className="w-full flex justify-between">
          <div className="w-[100px] flex justify-between">
            <div className="w-[45px] h-[45px] bg-orange-700 rounded-[50%]"></div>
            <p className="pt-2">{name}</p>
          </div>
          {isAdmin === "1" ? (
            <button className="w-[80px] h-[30px] bg-[#FF8080] text-[#F5F5F5] cursor-pointer" onClick={handleClick}>
              삭제
            </button>
          ) : null}
        </div>

        <div className="flex w-full h-[15px] mt-4">{title}</div>
        <p className="w-full h-full text-xl pt-2">{content}</p>
        <div>{formatDateTime(created_at)}</div>
      </div>
    </div>
  );
};
