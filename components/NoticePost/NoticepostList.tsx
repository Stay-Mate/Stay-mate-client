import React, { useState, useEffect } from "react";
import { PostType } from "@/types/post.type";
import axios from "axios";
import { NoticePostItem } from "./NoticePostItem";

export const NoticepostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  useEffect(() => {
    // API 호출 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/post");
        const data = response.data;
        console.log(data[0].post_id);

        setPostList(data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    // 함수 호출
    fetchPosts();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center">
        {/* {postList.map((post: PostType) => (
          <NoticePostItem
            key={post.post_id}
            created_at={post.created_at}
            name={post.name}
            title={post.title}
            content={post.content}
            post_id={post.post_id}
          />
        ))} */}
      </div>
    </div>
  );
};
