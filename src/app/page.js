import FirstSection from "@/components/firstSection";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black flex min-h-screen flex-col items-center justify-between">
      
      <Header />
      <FirstSection />
      
    </main>
  );
}
