import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
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
    icon: <GrIcons.GrSave />,
    cName: "nav_text",
  },
];
