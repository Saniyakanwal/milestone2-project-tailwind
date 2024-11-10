import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-3 pr-5 bg-[#0d47a1]">
      <h1 className="text-3xl font-bold m-2 text-white ml-12">Saniya Kanwal</h1>
      <nav className="flex justify-center items-center -mt-12 -mb-12 gap-16 font-bold text-white">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
      </nav>
      <button className="bg-[#00b0ff] rounded-[5px] pt-2 pr-3 pl-3 text-[16px] font-bold mr-10">Download</button>
    </div>
  )
}

export default Header
