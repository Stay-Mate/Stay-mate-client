import React, { useState } from "react";
import CheckinItem from "../CheckinItem";

const CheckinList = () => {
  return (
    <div className="w-[1000px] h-[1000px] bg-[#fff] border-x-gray-950 m-auto pt-[100px]">
      <div className="w-[750px] h-[70px] rounded-md m-auto hover:cursor-pointer ml-32">
        <ul className="flex justify-evenly font-mono text-xl pt-5">
          <li>학번</li>
          <li>이름</li>
          <li>구분</li>
          <li>호실 번호</li>
          <li>입소 시간</li>
        </ul>
      </div>
      <CheckinItem
        studentNumber="3학년 1반 6번"
        name="심미진"
        depart="B"
        roomNumber="417"
        checkinTime="7시 56분 31초"
      />
    </div>
  );
};

export default CheckinList;

{
  /* <CheckinItem
  studentNumber="3학년 1반 6번"
  name="심미진"
  depart="B"
  roomNumber="417"
  checkinTime="7시 56분 31초"
/>; */
}
