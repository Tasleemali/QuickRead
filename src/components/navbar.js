"use client"
import { Menu, Search, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/context'
const categories = [
    "Self-help",
    "Fiction",
    "Biography",
    "Finance",
    "Productvity"
  
  
  ]
const Navbar = () => {
    const [openMenu , setOpenMenu] = useState(false)
    const [isDropdownOpen , setIsDropdownOpen] = useState(false)
    const [searchBarOpen ,setSearchBarOpen] =useState(false)
    const {query, setQuery} =useContext(GlobalContext)
    const router = useRouter()
    const handleclick = (category) => {
        router.push(`/service/${category}`)
        setOpenMenu(false)
      }
  return (
    <div className='bg-white text-black'>
        <div className=' max-w-screen grid place-items-center  '>
            <div className=' px-5  w-full flex justify-between items-center  py-5 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)] shadow-gray-100'>
    <Link href={"/"}>  <span className=' font-bold text-3xl self-center whitespace-nowrap text-red-500'> <span className='text-black'>Quick</span>Read</span></Link> 
{/* desktop navbar */}
<div className='hidden md:flex'>
    <ul className='flex justify-between items-center gap-10'>
    <li className='hover:scale-95  cursor-pointer font-semibold'><Link href="/" >Home</Link></li>
    <li  onClick={()=> setOpenMenu(false)} className='hover:scale-95  cursor-pointer font-semibold'><Link href="/service/all-books">All-Books</Link></li>
    <li
            className='hover:scale-95  cursor-pointer font-semibold'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-red-500">Categories</button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 h-56 bg-white border border-gray-200 space-y-3  shadow-lg rounded-md z-50">
                {categories.map((cat ,idx)=> 
                <li onClick={() => handleclick(cat)} className='block px-4 py-2 hover:bg-gray-100' key={idx} >{cat}</li>
                )}
              </ul>
            )}
          </li>
          
          <li className='hover:scale-95  cursor-pointer font-semibold'><Link href="/service/about">About</Link></li>
    </ul>
</div>
{/* mobile navbar */}
<div className={` px-4 md:hidden text-right  bg-white h-lvh w-full fixed top-0 left-0 transform ${openMenu? "translate-x-0":'translate-x-full' }  transition-transform duration-300  ease-in-out z-50 `}>
    <span onClick={()=> setOpenMenu(false)} className='px-5   hover:txt-xl '><X/></span>

    <ul className='text-center space-y-10'>
    
        <li onClick={()=> setOpenMenu(false)} className='hover:scale-95  cursor-pointer font-semibold'><Link href="/">Home</Link></li>
        <li onClick={()=> setOpenMenu(false)} className='hover:scale-95  cursor-pointer font-semibold'><Link href="/service/all-books">All-Books</Link></li>
        <li
            className="relative hover:scale-95  cursor-pointer font-semibold"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-red-500">Categories</button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 right-0 mt-2 w-40 h-56 bg-white border border-gray-200 space-y-3  shadow-lg rounded-md z-50">
                {categories.map((cat ,idx)=> 
                <li  onClick={() => handleclick(cat)} className='block px-4 py-2 hover:bg-gray-100' key={idx} >{cat}</li>
                )}
              </ul>
            )}
          </li>
          
          <li onClick={()=> setOpenMenu(false)} className='hover:scale-95  cursor-pointer font-semibold'><Link href="/service/about">About</Link></li>
    </ul>

</div>
<div className='space-x-5'> 

    {/* search */}
    {searchBarOpen && (
        <div className="fixed top-0 left-0 w-full  py-5 bg-white text-black flex items-center justify-center z-50 p-4 shadow-lg">
          <form className="w-full max-w-lg flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Books"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 outline-none text-black"
            />
            <button type="submit" className="bg-black text-white px-4 py-2">
              <Search size={20} />
            </button>
            <button onClick={() => setSearchBarOpen(false)} className="ml-2 p-2 text-gray-600">
              <X size={24} />
            </button>
          </form>
        </div>
      )}
{/* searchbar */}
<button  onClick={()=>setSearchBarOpen(!searchBarOpen)} className=' text-2xl cursor-pointer'>
<Search  className='w-7 h-7'/>
</button>
{/* navbar button */}
<button onClick={()=> setOpenMenu(true)} className='md:hidden text-2xl'>
<Menu className='w-7 h-7 cursor-pointer'/>
</button>

</div>

            </div>
        </div>
    </div>
  )
}

export default Navbar
