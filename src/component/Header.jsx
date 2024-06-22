import React from "react";
import { Typography, Navbar, Button } from "../../clientExports";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-1 lg:mr-4 cursor-pointer py-1.5"
        >
          Blog App
        </Typography>
        <Typography>
          <Link href="/">
            <Button
              variant="text"
              className="mr-1 lg:mr-4 cursor-pointer py-1.5"
            >
              Home
            </Button>
          </Link>

          <Link href="/addpost">
            <Button
              variant="h6"
              className="mr-1 lg:mr-4 cursor-pointer py-1.5 px-4"
            >
              Add Post
            </Button>
          </Link>
        </Typography>
      </div>
    </Navbar>
  );
};

export default Header;
