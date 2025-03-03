import MaskCursor from "./components/MaskCursor";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <>
      <Navbar />
      <MaskCursor />
      <button className="relative overflow-hidden p-3 rounded-full bg-[#3498db] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:rounded-full before:bg-[#2ecc71] before:transition-all before:duration-300 ease-in-out hover:before:left-0">
        <span className="relative z-10 text-white font-bold">
          Hover Me
        </span>
      </button>
    </>
  );
}
