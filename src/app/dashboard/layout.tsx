import Sidebar from "@/components/sidebar/Sidebar";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="bg-indigo-90 w-full px-6 text-purple-gray-40">
        {children}
      </div>
    </>
  )
}