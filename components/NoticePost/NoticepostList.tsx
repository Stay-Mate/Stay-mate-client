import React, { useState, useEffect } from "react";
import { PostType } from "../../types/post.type";
import formatDateTime from "@/utils/formDateTime";

export const NoticepostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);

  useEffect(() => {
    // API 호출 함수
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const data = await response.json();
        setPostList(data); // 가져온 데이터를 state에 저장
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    // 함수 호출
    fetchPosts();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 호출되도록 설정


  return (
    <div>
      {postList.map((post: PostType) => (
        <div
          className="col-span-3 w-[650px] h-auto shadow-xl shadow-gray-200 rounded-sm lg:p-4 bg-[#FBFBFB] mr-[50px]"
          key={post.post_id}
        >
          <div className="w-[100px] flex justify-between">
            <div className="w-[45px] h-[45px] bg-orange-700 rounded-[50%]"></div>
            <p className="pt-2">{post.user_id}</p>
          </div>
          <div className="flex w-full h-[15px] mt-4">{post.title}</div>
          <p className="w-full h-full text-xl pt-2">{post.content}</p>
          <div>{formatDateTime(post.created_at)}</div>
        </div>
      ))}
    </div>
  );
};
