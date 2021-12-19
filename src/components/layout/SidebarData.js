import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Main",
    path: "/main",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav_text",
  },
  {
    title: "Favourite",
    path: "/favourite",
    icon: <AiIcons.AiOutlineHeart />,
    cName: "nav_text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <AiIcons.AiOutlineSearch />,
    cName: "nav_text",
  },
  {
    title: "Watch Later",
    path: "/watchlater",
    icon: <BsIcons.BsSave2 />,
    cName: "nav_text",
  },
];
