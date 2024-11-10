import Image from "next/image";
import Header from "./Header/page";
import Footer from "./Footer/page";

export default function() {
  return(
    <div>
      <Header/>
      <div className="flex items-center pt-9 pr-20">
        <div className="w-1/2">
        <h1 className="text-5xl text-[#0d47a1] ml-8 mt-20 font-bold">"I'm Saniya Kanwal"</h1>
        <h2 className="text-[18px] font-[700] text-[#E0E0E0] mt-2 ml-10">"Frontend Enthusiast | HTML, CSS & TypeScript| Currently Learning Next.js"</h2> 
        <button className="bg-[#00b0ff] text-black p-2 rounded-lg ml-10 mr-9 mt-3">View My Work</button>
        </div>
        <div className="w-1/2 mt-10 ml-7">
        <Image  src="/Images/front.png" alt="img" height={500} width={700} />
        </div>
        </div>
        <br />
        <br />
        <br /><br />
        <Footer/>
      </div>
  )
  }