import { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/common/header/Header";
import AssetsWrapper from "@/components/dashboard/home/AssetsWrapper"
import AssetsWrapperSkeleton from "@/components/dashboard/home/AssetsWrapperSkeleton";

export const metadata: Metadata = {
  title: '¡Bienvenido, Dibu!',
};

export default async function Page() {
  return (
    <>
      <Header title="Inicio" />
      <main>
        <Suspense fallback={<AssetsWrapperSkeleton />}>
          <AssetsWrapper />
        </Suspense>
      </main>
    </>
  )
}
