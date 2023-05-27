import React, { useState } from "react";
import NavBar from "../NavBar";

const LostpostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image_url", imageUrl);

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="pt-[100px]">
        <form
          className="w-[900px] h-[600px] bg-[#F9F9F9] m-auto mb-4 shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[800px] h-[50px] outline-none text-2xl text-[#766D6D] ml-10 mt-5 p-2 border-b-2"
            placeholder="제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <input
            className="w-[800px] h-[40px] outline-none text-xl text-[#766D6D] ml-10 mt-5 p-2 border-b-2"
            placeholder="내용"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className="w-[800px] h-[300px] bg-[#F6EBEB] ml-10 mt-4 pt-[120px] pl-[300px]">
            <input
              type="file"
              accept="image/*"
            />
          </div>
          <div className="w-[210px] h-[40px] mt-[60px] ml-[330px] flex justify-between">
            <button className="w-[100px] h-full bg-[#FFB4B4] text-[#fff]">
              취소
            </button>
            <button
              className="w-[100px] h-full bg-[#FF8080] text-[#fff]"
              type="submit"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LostpostForm;
