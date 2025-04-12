"use client"

import CategorySkeleton from "@/components/skeleton/categoryskeleton";
import { GlobalContext } from "@/context";
import { useParams, useRouter, } from "next/navigation"
import { useContext, useEffect, useState } from "react"

const Categories = ({}) => {
     const { category } = useParams();
    const router = useRouter()
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
 const {  query } = useContext(GlobalContext)
    useEffect(() => {
        async function fetchblog() {
            setLoading(true)
            try {
                const res = await fetch(`/api/client/${category}`)
                const data = await res.json()
                setBook(data.book)
                setLoading(false)
            } catch (error) {
                console.log("failed to fetch", error)
            }
        }
        fetchblog()
    }, [category])

    console.log(book)
    if (loading) {
        return (
        <CategorySkeleton/>
        )
      }

    if ( book.length === 0) {
        return (
          <div className="text-center py-20 text-lg font-semibold text-gray-500">
            No books available in <span className="capitalize">{category}</span>.
          </div>
        )
      }
    return (

        <main className="bg-white text-black">
            <div className="max-w-screen-xl mx-auto px-4 py-8 ">
                <h1> </h1>
              <section className="py-5">
            <h1 className=" text-2xl md:text-3xl font-semibold mb-6">{category}</h1>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center items-start gap-3 md:gap-6 space-y-7">
            {book.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase())).map((book ,index) =>
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
            </section>
            </div>
        </main>
        
    )
}

export default Categories

