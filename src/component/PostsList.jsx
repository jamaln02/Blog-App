"use client";
import Post from "@/app/posts/page";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../../redux-system/redux-slices/postslice.jsx";
import ReactLoading from "react-loading";
const PostsList = () => {
  const { postDetail, loadingPosts } = useSelector(
    (state) => state.postDetails
  );
  console.log(loadingPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getposts());
  }, []);
  return (
    <div className="flex flex-wrap gap-4 justify-center ">
      {loadingPosts ? (
        <ReactLoading type={"cylon"} color={"blue"} height={667} width={375} />
      ) : (
        postDetail?.map((post, ind) => <Post key={ind} posts={post}></Post>)
      )}
    </div>
  );
};

export default PostsList;
