"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Blogs = () => {
    const router = useRouter()
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        async function fetchblog() {
            try {
                const res = await fetch("/api/client/get")
                const data = await res.json()
                setBlogData(data.blogs)
            } catch (error) {
                console.log("failed to fetch", error)
            }
        }
        fetchblog()
    }, [])

    return (

        <div className="bg-white text-black">
              <div className=" m-4 max-w-screen grid grid-cols-1 place-items-center  ">
 
              <div className=" px-5 max-w-5xl grid grid-cols-1 place-items-center space-y-12">
                     {blogData.map((item ,index ) => (

                     <div key={index} onClick={() => router.push(`/blog/all-blog/${item._id}`)} className=" px-5 w-full flex justify-between items-center sm:items-start gap-5 bg-white shadow-lg shadow-gray-200 rounded-sm py-5 ">
                        {/* text left */}
                      <div className="flex flex-col items-start">
                        <h2 className="text-xs md:text-lg">{item.title}</h2>
                        <p className="text-[12px]  text-gray-500">
                                   <span>{item.category}</span>
                                . <span>Updated:{item.createdAt}</span>

                                </p>
                      </div>

                              {/*image right  */}
                              <div className="min-w-[80px] h-[60px]">
                                   <img src={item.image} className="w-full h-full object-cover flex-shrink-0 rounded overflow-hidden"/>
                              </div>

                     </div>

                     ))}
              </div>

             </div>


        </div>



        // <div className="bg-white text-black">
        //     <h1 >Top-News</h1>
        //     <div className=" m-4 max-w-screen md:px-10 py-8  ">

        //         {blogData.map((item, index) =>
        //             <div key={index} onClick={() => router.push(`/blog/all-blog/${item._id}`)} className="px-3 bg-white shadow-md rounded-md w-full mb-4 space-y-28  ">
        //                 <div className="flex items-start space-y-5 gap-3">

        //                     <div className=" flex flex-col justify-between flex-1 ">
        //                         <h2 className=" text-sm md:text-lg font-semibold mb-2">{item.title}</h2>

        //                         <p className="text-[12px]  text-gray-500">
        //                             <span>{item.category}</span>
        //                         . <span>Updated:{item.createdAt}</span>

        //                         </p>
        //                     </div>
        //                     <div className="min-w-[80px] h-[60px] flex-shrink-0 rounded overflow-hidden">

        //                         <img src={item.image} at='img' className="w-full h-full object-cover" />
        //                     </div>

        //                 </div>





        //             </div>
        //         )

        //         }
        //     </div>



        // </div>
    )
}

export default Blogs
