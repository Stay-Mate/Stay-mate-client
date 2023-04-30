import React from "react";
import NavBar from "../NavBar";

const LostpostForm = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[100px]">
        <form className="w-[900px] h-[600px] bg-[#F9F9F9] m-auto mb-4 shadow-md">
          <input className="w-[800px] h-[50px] outline-none text-2xl text-[#766D6D] ml-10 mt-5 p-2 border-b-2" placeholder="제목"/>
          <br />
          <input className="w-[800px] h-[40px] outline-none text-xl text-[#766D6D] ml-10 mt-5 p-2 border-b-2" placeholder="내용"/>
          <div className="w-[800px] h-[300px] bg-[#F6EBEB] ml-10 mt-4 pt-[120px] pl-[300px]">
            <button className="w-[200px] h-10 bg-[#FF8080] text-[#600707]">이미지 업로드</button>
          </div>
          <div className="w-[210px] h-[40px] mt-[60px] ml-[330px] flex justify-between">
            <button className="w-[100px] h-full bg-[#FFB4B4] text-[#fff]">취소</button>
            <button className="w-[100px] h-full bg-[#FF8080] text-[#fff]">확인</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LostpostForm;
