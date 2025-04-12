"use client"

import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" bg-white text-black ">
      <div className="max-w-screen mx-auto grid place-items-center ">
      <div className=" bg-gray-100 w-full mx-auto px-5 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div>
          <Link href={"/"}>  <span className=' font-bold text-3xl self-center whitespace-nowrap text-red-500'> <span className='text-black'>Quick</span>Read</span></Link> 
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-800 hover:scale-95 transition">Home</a>
            <a href="#" className="text-gray-800 hover:hover:scale-95 transition">About</a>
            <a href="#" className="text-gray-800 hover:hover:scale-95 transition">Contact</a>
          </div>
        </div>
        <hr className=" mt-5 text-gray-700 "/>
        <p className="text-sm text-center text-gray-800 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        
      </div>
      </div>
    </footer>
  );
}

