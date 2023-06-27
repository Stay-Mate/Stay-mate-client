import React, { useState, useEffect } from "react";
import { PostType } from "../../types/post.type";
import axios from "axios";
import { NoticePostItem } from "./NoticePostItem";

export const NoticepostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  useEffect(() => {
    // API 호출 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/post");
        const data = response.data; // response.json() 메서드를 사용하지 않고 response.data를 바로 사용
        console.log(data);

        setPostList(data); // 가져온 데이터를 state에 저장
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    // 함수 호출
    fetchPosts();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 호출되도록 설정

  return (
    <div className="ml-[200px]">
      {postList.map((post: PostType) => (
        <>
          <NoticePostItem
            created_at={post.created_at}
            name={post.name}
            title={post.title}
            content={post.content}
          />
        </>
      ))}
    </div>
  );
};
