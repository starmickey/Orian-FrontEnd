export default function ProfileBadgeSkeleton() {
  return(
    <div className="flex h-6 w-40 items-center justify-start pr-1 gap-2">
      {/* Image replacer */}
      <div className="bg-indigo-85 w-[27px] h-[27px]"></div>
      {/* User name */}
      <div className="bg-indigo-85 w-20 h-5"></div>
    </div>
  );
}