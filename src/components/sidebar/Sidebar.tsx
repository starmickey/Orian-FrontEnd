"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { IoIosArrowBack as CollapseButton } from "react-icons/io";
import Logo from "../icons/Logo";
import SidebarElement from "./SidebarElement";
import sidebarElements from "./sidebarElements";
import SeparatorLine from "../icons/SeparatorLine";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // Keeps the position of the last element selected by the user in sidebarElements array
  const [selectedElement, setSelectedElement] = useState(0);

  return (
    <aside className="flex sticky">
      <nav
        className={clsx(
          "bg-indigo-100 h-screen pt-7",
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
        <SeparatorLine className="mx-4 mt-3" />

        {/* Sidebar Elements */}
        <ul className="list-none">
          {sidebarElements.map((element, index) => (
            <li
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
            </li>
          ))}
        </ul>

        {/* Collapse Button */}
        <div className={clsx(
          "flex w-full h-8 mt-3 items-center text-purple-gray-40",
          {
            "px-8 justify-end ": !collapsed,
            "justify-center": collapsed
          }
        )}>
          <CollapseButton
            className={clsx("text-gray", { "rotate-180": collapsed })}
            onClick={() => setCollapsed(!collapsed)}
            onMouseOver={() => setCollapsed(false)}
          />
        </div>
      </nav>
    </aside>
  );
}
