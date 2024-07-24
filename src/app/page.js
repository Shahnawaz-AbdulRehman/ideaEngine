import FirstSection from "@/components/firstSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="text-white">
        hello world
      </div>
      <FirstSection />
      
    </main>
  );
}
