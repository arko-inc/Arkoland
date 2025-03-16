import { Wrench } from "lucide-react";
export default function Home() {
  return (
   <>
   <div className="bg-black w-full h-screen">
    <h1 className="text-white text-center text-6xl">Welcome <br />to <br /> Arkoland!!!!!!!!!</h1>
    <div className="flex justify-center items-center text-white text-7xl mt-10">
      <span className="mr-1">Under construction</span>
      <Wrench size={64} /> {/* Adjust the size as needed */}
    </div>
   </div>
   </>
  );
}
