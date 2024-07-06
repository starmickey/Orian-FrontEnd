"use client";

import ProfileBadge from "./ProfileBadge";
import ProfileBadgeSkeleton from "./ProfileBadgeSkeleton";
import { Suspense } from "react";

export default function Header({ title } : { title : string}) {
  return (
    <header className="flex h-16 w-full justify-between my-8 items-center ">
      {/* Title */}
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
      
      {/* <ProfileBadge /> */}
      <Suspense fallback={<ProfileBadgeSkeleton />}>
        <ProfileBadge />
      </Suspense>
    </header>
  );
}