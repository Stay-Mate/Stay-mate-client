import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import NavBar from "../NavBar";
import { useRouter } from "next/router";
import { PostType } from "@/types/post.type";

const LostpostForm = () => {
  const [post, setPost] = useState<PostType>({
    title: "",
    content: "",
    imgUrl: "",
    createdAt: "",
  });

  const [error, setError] = useState<string>("");

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imgUrl = URL.createObjectURL(file as Blob);
    setPost((prevPost) => ({
      ...prevPost,
      imgUrl: imgUrl,
    }));
  };

  const router = useRouter();

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!post.title && !post.content && !post.imgUrl) {
      setError("모든 항목은 필수 항목입니다.");
      console.log("FAIL");
      return;
    } else {
      // TODO: Add logic to handle form submission
      console.log("SUCCESS", post);
    }

    setError(""); // 에러 초기화
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // 형식을 맞추어야 할 경우 필요한 포맷으로 변환할 수 있습니다.
    setPost((prevPost) => ({
      ...prevPost,
      createdAt: formattedDate,
    }));
  }, []);

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
            value={post.title}
            onChange={(e) =>
              setPost((prevPost) => ({
                ...prevPost,
                title: e.target.value,
              }))
            }
          />
          <br />
          <input
            className="w-[800px] h-[40px] outline-none text-xl text-[#766D6D] ml-10 mt-5 p-2 border-b-2"
            placeholder="내용"
            value={post.content}
            onChange={(e) =>
              setPost((prevPost) => ({
                ...prevPost,
                content: e.target.value,
              }))
            }
          />
          <br />
          <div className="w-[800px] h-[300px] bg-[#F6EBEB] ml-10 mt-4 pt-[120px] pl-[300px]">
            <input type="file" accept="image/*" onChange={handleImgChange} />
          </div>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <div className="w-[210px] h-[40px] mt-[60px] ml-[330px] flex justify-between">
            <button
              className="w-[100px] h-full bg-[#FFB4B4] text-[#fff]"
              onClick={handleCancel}
            >
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
