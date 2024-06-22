"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Typography,
  CardFooter,
  Button,
} from "../../../clientExports.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  getBody,
  getTitle,
} from "../../../redux-system/redux-slices/postslice.jsx";
import { useRouter } from "next/navigation.js";
import { Textarea } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddPost = () => {
  const success = () =>
    toast.success("Your post has been successfully added !");
  const notify = () => toast.error("Please make sure to fill in the fields  !");

  const { titleValue, bodyValue } = useSelector((state) => state.postDetails);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    if (titleValue !== "" && bodyValue !== "") {
      dispatch(addPost({ title: titleValue, body: bodyValue }));
      success();
      setTimeout(() => {
        router.push("/");
      }, 800);
    } else {
      notify();
    }
  };
  useEffect(() => {
    dispatch(getTitle(""));
    dispatch(getBody(""));
  }, []);
  return (
    <div className="flex justify-center">
      <ToastContainer />
      <Card className="mt-20 mx-4 w-96 bg-gray-100">
        <CardBody className="gap-6 flex flex-col">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Add Post
          </Typography>
          <Input
            label="Title"
            className="mb-2 "
            onChange={(e) => dispatch(getTitle(e.target.value))}
            value={titleValue}
          />
          <Textarea
            label="Body"
            className="mb-2 "
            onChange={(e) => dispatch(getBody(e.target.value))}
            value={bodyValue}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => handleClick()}>Add Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddPost;
