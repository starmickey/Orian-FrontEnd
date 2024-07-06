"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { IoIosArrowDown as CollapseButton } from "react-icons/io";

export default function ProfileBadge() {
  const [collapsed, setCollapsed] = useState(true);
  const img = "/profile.jpg";
  const userName = "Dibu";

  const actions = [
    {
      label: "Sign Out",
      href: "/",
    },
    {
      label: "Settings",
      href: "/",
    },
  ];

  return (
    <div onMouseLeave={() => setCollapsed(true)}>
      <div className="flex h-8 w-40 items-center justify-start pr-1 my-2 gap-2">
        {/* Image */}
        <Image
          src={img}
          width={32}
          height={32}
          alt="profile image"
        />
        <div className="flex w-full justify-between items-center">
          {/* User name */}
          <p className="flex w-full justify-start">
            {userName}
          </p>

          {/* Collapse button */}
          <button
            className={clsx({ "rotate-180": !collapsed })}
            onClick={() => setCollapsed(!collapsed)}
            onMouseOver={() => setCollapsed(false)}
          >
            <CollapseButton size={16} />
          </button>
        </div>
      </div>

      {/* Actions list */}
      <ul
        className={clsx(
          "bg-indigo-90 list-none shadow-md absolute w-40",
          { "hidden": collapsed }
        )}
      >
        {actions.map((action, index) => (
          <li key={index}>
            <Link
              className="
              flex h-10 w-full items-center
              hover:bg-purple-gray-90 p-1 rounded-sm"
              href={action.href}
            >
              {action.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}