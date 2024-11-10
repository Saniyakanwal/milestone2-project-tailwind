import React from 'react'
import Header from '../Header/page'
import Image from 'next/image'
import Footer from '../Footer/page'

const About = () => {
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-between pt-10 pr-10">
      <div className="w-1/2">
        <h1 className="text-[40px] font-bold text-[#0d47a1] mt-10 ml-8">About Me</h1>
        <p className="text-[#E0E0E0] text-2xl ml-10"> Hi! I'm a front-end developer skilled in HTML, CSS, and TypeScript, currently diving deeper into Next.js.
            I love crafting beautiful, responsive websites and learning new web technologies."I approach each project with a mix of creativity and analytical thinking. I enjoy the process of transforming ideas into polished, user-friendly <br /> <br />
            "Learning new technologies and frameworks is a big part of why I enjoy web development. I believe that staying adaptable is key to a successful career in tech, and I’m excited to keep exploring and building on my skill set as the field evolves."

        </p>
      </div>
      <div className="mt-12 mr-48">
        <Image src="/Images/about.png" alt='about pic' height={100} width={350}/>
        </div>
      </div>
      <br />
      <br />
      <br /> <br /> <br />
      <Footer/>
    </div>
  )
}

export default About
