import React, { useState, useEffect } from "react";
import { PostType } from "../../types/post.type";

export const LostpostList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [postList, setPostList] = useState<PostType[]>([]);

  useEffect(() => {
    // API 호출 함수
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post"); // API_URL은 실제 API의 엔드포인트를 넣어야 합니다.
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
        <div key={post.post_id}>
          {post.post_id}
          <br/>
          {post.user_id}
          <div>{post.title}</div>
          <div>{post.content}</div>
          <img src={post.img_url} alt="이미지"/>
          <div>{post.created_at}</div>
        </div>
      ))}
    </div>
  );
};
