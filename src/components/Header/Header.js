import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="flex justify-items-center md:h-[80px] md:flex md:w-full md:justify-end md:items-center text-black font-railway font-semibold shadow-xl pr-10 text-2xl bg-gray-100 static">
        <CustomLink className="p-1 ms-1 content " to={"/"}>
          Home
        </CustomLink>
        <CustomLink className="p-1 ms-1 content " to={"/review"}>
          Reviews
        </CustomLink>
        <CustomLink className="p-1 ms-1 content " to={"/dashboard"}>
          Dashboard
        </CustomLink>
        <CustomLink className="p-1 ms-1 content " to={"/blogs"}>
          Blogs
        </CustomLink>
        <CustomLink className="p-1 ms-1 content " to={"/about"}>
          About
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
