import clsx from "clsx";
import React, { ReactNode } from 'react';
import { BiSolidCircleHalf as HalfCircle } from "react-icons/bi";
import Link from 'next/link';

interface SidebarElementProps {
  icon: ReactNode;
  label: string;
  href: string;
  className?: string;
  collapsed?: boolean;
  selected?: boolean;
}

function SidebarElement({
  icon,
  label,
  href,
  className = "",
  collapsed = false,
  selected = false
}: SidebarElementProps
) {
  return (
    <Link
      href={href}
      className={clsx(
        "relative flex items-center px-2 py-1 gap-4",
        " hover:bg-transparent-white-10",
        className,
        {
          "text-purple-60": selected,
          "text-purple-gray-40 hover:text-purple-60 active:text-purple-60": !selected,
        }
      )}
    >

      {/* Half circle */}
      {selected && (
        <div className="flex absolute left-[-15px] w-[30px] h-[30px] items-center justify-center">
          <HalfCircle size={10} className="relative z-10" />
          <div className="absolute inset-0 purple-radial-shadow"></div>
        </div>
      )}

      {/* Icon */}
      <div className={clsx(
        "flex items-center justify-center",
        {
          "w-4 flex-shrink-0": !collapsed,
          "w-full justify-start": collapsed
        })}>
        {icon}
      </div>

      {/* Label */}
      {!collapsed && (
        <div className="text-sm font-medium pt-[0.1rem] w-full">
          {label}
        </div>
      )}
    </Link>
  )
}

export default SidebarElement;