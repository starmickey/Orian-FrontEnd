import Sidebar from "@/components/sidebar/Sidebar";
import { anek_bangla } from "@/app/fonts";
import "./globals.css";
import { Metadata } from 'next';
import { metadata as defaultMetadata} from "./metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${anek_bangla.className} flex`}>
        <Sidebar />
        <div className="bg-indigo-90 w-full px-6 text-purple-gray-40">
          {children}
        </div>
      </body>
    </html>
  );
}
