import Feedback from "@/components/Feedback";
import FindItOut from "@/components/section2/Section2";
import { Hot } from "@/components/section4/Hot";
import KitCompleat from "@/components/section3/Section3";
import { SectionKakau } from "@/components/section1/Section1";

export default function Home() {
  return (
    <main className="w-[1920px] [h-2368px] flex-shrink-0 bg-third-white z-10">
      <SectionKakau />
      <FindItOut />
      <KitCompleat />
      <Hot />
      <Feedback />
    </main>
  );
}
