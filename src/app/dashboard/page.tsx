import Header from "@/components/common/header/Header";
import { Metadata } from "next";
import AssetsWrapper from "@/components/dashboard/home/AssetsWrapper"
import AssetsWrapperSkeleton from "@/components/dashboard/home/AssetsWrapperSkeleton";

export const metadata: Metadata = {
  title: '¡Bienvenido, Dibu!',
};

export default function Page() {
  return (
    <>
      <Header title="Inicio" />
      <main>
        <AssetsWrapper />
        <AssetsWrapperSkeleton />
        
      </main>
    </>
  )
}