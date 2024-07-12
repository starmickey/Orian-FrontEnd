"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Icon } from '@iconify/react';
import Logo from "../icons/Logo";
import SidebarElement from "./SidebarElement";
import sidebarElements from "./sidebarElements";
import SeparatorLine from "../icons/SeparatorLine";
import { usePathname } from 'next/navigation';
import './sidebar.css';

export default function Sidebar() {
  // True if the sidebar is collapsed
  const [collapsed, setCollapsed] = useState(false);
  // True if the user pinned the sidebar for it to keep always expanded
  const [fixExpand, setFixExpand] = useState(true);
  // True if the mouse is over the sidebar
  const [mouseOver, setMouseOver] = useState(false);
  const pathname = usePathname();

  const handleCollapseButtonClick = () => {
    setCollapsed(!collapsed);
    setFixExpand(!fixExpand);
  }

  // Expanding on hover effect
  useEffect(() => {
    const startState = mouseOver;
    setTimeout(() => {
      if (mouseOver === startState && !fixExpand) {
        setCollapsed(!mouseOver);
      }
    }, 300)
  }, [mouseOver]);

  return (
    <aside className="flex sticky"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
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
            <li key={index}>
              <SidebarElement
                label={element.label}
                href={element.path}
                collapsed={collapsed}
                icon={element.icon}
                className={clsx("w-full h-8 mt-3", { "px-8": !collapsed })}
                selected={pathname === element.path}
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
          <Icon icon="material-symbols:keyboard-arrow-right"
            className={clsx("text-gray", { "rotate-180": collapsed })}
            onClick={handleCollapseButtonClick}
          />
        </div>
      </nav>
    </aside>
  );
}
