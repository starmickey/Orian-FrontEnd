"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { IoIosArrowBack as CollapseButton } from "react-icons/io";
import Logo from "../icons/Logo";
import SidebarElement from "./SidebarElement";
import sidebarElements from "./sidebarElements";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // Keeps the position of the last element selected by the user in sidebarElements array
  const [selectedElement, setSelectedElement] = useState(0);

  return (
    <div className="flex sticky">
      <div
        className={clsx(
          "bg-dark-indigo h-screen text-white pt-7",
          { "w-56": !collapsed, "w-12": collapsed }
        )}
      >
        {/* Logo */}
        <div className={clsx("flex w-full", { "justify-center": collapsed })}>
          <Logo
            showLabel={!collapsed}
            className={clsx({
              "px-6 h-12 w-auto": !collapsed,
              "h-7 w-auto": collapsed,
            })}
          />
        </div>

        {/* Separator line */}
        <div className="bg-transparent-purple h-px mx-4 mt-3"></div>

        {/* Sidebar Elements */}
        {sidebarElements.map((element, index) => (
          <div
            key={index}
            onClick={() => { setSelectedElement(index) }}
          >
            <SidebarElement
              label={element.label}
              href={element.href}
              collapsed={collapsed}
              icon={element.icon}
              className={clsx("w-full h-8 mt-3", { "px-8": !collapsed })}
              selected={index == selectedElement}
            />
          </div>
        ))}

        {/* Collapse Button */}
        <div className={clsx(
          "flex w-full h-8 mt-3 items-center",
          {
            "px-8 justify-end ": !collapsed,
            "justify-center": collapsed
          }
        )}>
          <CollapseButton
            className={clsx("text-gray", { "rotate-180": !collapsed })}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        </div>
      </div>
    </div>
  );
}
