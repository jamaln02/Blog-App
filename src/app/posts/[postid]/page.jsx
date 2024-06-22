"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Card, CardBody, Typography } from "../../../../clientExports.js";
import { useDispatch, useSelector } from "react-redux";
import { getpost } from "../../../../redux-system/redux-slices/postslice.jsx";

const PostPage = () => {
  const { postid } = useParams();

  const { postinfo } = useSelector((state) => state.postDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpost(postid));
  }, [postid]);
  return (
    <Card className="mt-6 mx-4 max-w-max flex-row ">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {postinfo.title}
        </Typography>
        <Typography>{postinfo.body}</Typography>
      </CardBody>
    </Card>
  );
};

export default PostPage;
