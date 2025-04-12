"use client"
import { useState ,useEffect, useContext } from "react"
import { useRouter  } from "next/navigation"
import { GlobalContext } from "@/context"
import AllBooksSkeleton from "@/components/skeleton/allbookskeleton"
function AllBooks() {
     const router = useRouter()
      const [blogData, setBlogData] = useState([])
      const [loading, setLoading] = useState(true)
       const {  query } = useContext(GlobalContext)
    
      useEffect(() => {
        async function fetchblog() {
          setLoading(true)
          try {
            const res = await fetch("/api/client/get")
            const data = await res.json()
            setBlogData(data.blogs)
            setLoading(false)
          } catch (error) {
            console.log("failed to fetch", error)
          }
        }
        fetchblog()
      }, [])
      if (loading) {
        return (
         <AllBooksSkeleton/>
        )
      }
  return (
    <div className='bg-white text-black'>
        <div className="max-w-screen-xl mx-auto px-4 py-8 "> 
            <h1 className=" text-2xl md:text-3xl font-semibold mb-6">All-Books</h1>
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center  justify-center  items-start gap-3 md:gap-6 space-y-7">
            {blogData.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase())).map((book, index) => 
             
                  <div
                  key={index}
                  onClick={() => router.push(`/service/summarypage/${book._id}`)}
                  className="rounded-xl  p-2 shadow hover:scale-95 text-center overflow-hidden w-full max-w-[200px] mx-auto"
                >
                  <div className="aspect-[3/4] w-full mb-4 overflow-hidden rounded-md ">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-20">
                  <h3 className="font-semibold text-sm leading-tight">{book.title}</h3>
                  <p className="text-gray-600">by:{book.author}</p>
                  </div>
                </div>



               
            
            )}
          </div>
        </div>
      
    </div>
  )
}

export default AllBooks
