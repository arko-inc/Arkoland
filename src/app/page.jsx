import Link from "next/link";
import SentenceSlider from "@/components/SentenceSlider";
import SliderSec from "@/components/SliderSec";
export default function Home() {
  return (
   <>
   <div className="">

    <SentenceSlider/>
    <SliderSec/>
    <div className=" h-[33.33vh] flex items-center justify-center  bg-black mix-blend-difference">
        <Link
          href="/gallery"
          className="px-8 py-4 bg-white text-zinc-950 text-lg font-semibold rounded-full hover:bg-opacity-80 transition-all duration-300 mix-blend-difference"
        >
          See My More Works
        </Link>
      </div>
 
   </div>
   </>
  );
}
