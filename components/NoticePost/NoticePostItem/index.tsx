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

  return (
    <div className="mb-5">
      <div
        className="col-span-3 w-[650px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB] mr-[50px]"
        key={post_id}
      >
        <div className="w-full flex justify-between">
          <div className="w-[100px] flex justify-between">
            <div className="w-[45px] h-[45px] bg-orange-700 rounded-[50%]"></div>
            <p className="pt-2">{name}</p>
          </div>
          {isAdmin === "1" ? (
            <button className="w-[70px] h-[30px] bg-[#FF8080] text-[#F5F5F5] cursor-pointer">
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
