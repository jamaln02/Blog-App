import Link from "next/link";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "../../../clientExports";
const Post = ({ posts }) => {
  return (
    <Card className="mt-6 w-10/12 md:w-1/3 lg:w-1/4 mx-2 md:mx-4 bg-gray-100">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {posts?.title}
        </Typography>
        <Typography variant="paragraph" color="gray">
          {posts?.body.slice(0, 100)}...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`/posts/${posts?.id}`}>
          {" "}
          <Button>Read more </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Post;
