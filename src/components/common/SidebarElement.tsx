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

function SidebarElement(
  { icon, label, href, className = "", collapsed = false, selected = false } : SidebarElementProps
){
  return (
    <Link
      href={href}
      className={clsx(
        "relative flex items-center px-2 py-1 gap-4 rounded-md",
        "text-lila",
        "hover:text-purple hover:bg-transparent-white",
        "active:text-purple",
        className,
        {
          "text-purple" : selected
        }
      )}
    >

      {/* Half circle */}
      <div className={clsx(
        "absolute left-[-5px]",
        { "hidden" : !selected}
      )}>
        <HalfCircle size={10}/>
      </div>

      {/* Icon */}
      <div className={clsx(
        "flex items-center justify-center",
        {
          "w-4 flex-shrink-0" : !collapsed,
          "w-full justify-start" : collapsed
        })}>
        {icon}
      </div>

      {/* Label */}
      <div className={clsx(
        "text-sm font-medium pt-[0.1rem] w-full",
        {"hidden" : collapsed}
      )}>
        {label}
      </div>
    </Link>
  )
}

export default SidebarElement;