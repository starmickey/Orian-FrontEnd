import "./globals.css";
import { anek_bangla } from "@/app/fonts";
import Sidebar from "@/components/common/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${anek_bangla.className} flex`}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
