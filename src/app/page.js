"use client"
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context";
import HomeSkeleton from "@/components/skeleton/homeskeleton";


const categories = [
  "Self-help",
  "Fiction",
  "Biography",
  "Finance",
  "Productvity"


]


export default function Home() {
  const router = useRouter()
  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [email ,setEmail] = useState('')
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
// subscribe
 
const subscribebtn = async () => {
  if (!email) return alert("Please enter your email.")

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      console.log("Thank you for subscribing")
      alert("Subscription successful!")
      setEmail("") // clear the email input
    } else {
      console.log("Something went wrong:", data.message)
      alert(data.message || "Something went wrong")
    }
  } catch (error) {
    console.log("Fetching error:", error)
    alert("Something went wrong. Please try again later.")
  }
}

  // console.log(blogData)
  const handleclick = (category) => {
    router.push(`/service/${category}`)
  }
  if (loading) {
    return (
   <HomeSkeleton/>
    )
  }

  return (
    <main className="bg-white text-black ">
      <div className="max-w-screen-xl mx-auto px-4 py-8 ">
        {/* hero section */}
        <section className="text-center py-5">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl font-bold">Discover the Best Book Summaries</h1>
          <p className=" text-sm  md:text-lg text-gray-600 max-w-2xl mx-auto">Bite-sized insight from the world's most powerful book in minutes.</p>
          <div className="flex justify-center items-center gap-4 p-3">
            <button onClick={()=> router.push("/service/all-books")} className=" text-sm md:text-md bg-black text-white border-2 border-black font-bold rounded-md p-2 hover:scale-95 cursor-pointer ">Explore Summaries</button>
           <a href="#newsletter"><button className=" text-sm md:text-md bg-black text-white border-2 border-black font-bold rounded-md p-2 hover:scale-95 cursor-pointer ">Subscribe to Newsletter</button></a> 
          </div>
        </section>,
        {/* categories */}
        <section>
          <h1 className=" text-2xl md:text-3xl font-semibold mb-6">Popular Categories</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            { categories.map((cat, index) =>
              <button onClick={() => handleclick(cat)} key={index} className=" font-semibold  border-2 border-gray-400  rounded-2xl py-2 hover:scale-95  cursor-pointer" >{cat}</button>
            )}
          </div>
        </section  >
        {/* Letest summriize */}
        <section id="letest" className="py-5">
          <h1 className=" text-2xl md:text-3xl font-semibold mb-6">Latest Summaries</h1>
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center  justify-center  items-start gap-3 md:gap-6 space-y-7">
            {blogData.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase())).map((book, index) => {
              if (book.subCategory === "letest") {
                return (
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



                )
              }
            }
            )}
          </div>
        </section>
        {/* topPic */}
        <section className="py-5">
          <h1 className=" text-2xl md:text-3xl font-semibold mb-6">Top Books</h1>
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center items-start gap-3 md:gap-6 space-y-7">
            {blogData.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase())).map((book, index) => {
              if (book.subCategory === "topPic") {
                return (
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


                )
              }
            }
            )}
          </div>
        </section>
        {/* news Letter */}
        <section id="newsletter" className=" bg-gray-100 rounded-xl text-center p-6">
          <h1 className="text-xl font-semibold mb-2">Never miss a summary</h1>
          <p className="text-gray-600 mb-4">Subscribe to our Newsletter and stay updated.</p>
          <input type="email" placeholder="enter your email" className="px-4 py-2 rounded-xl md:rounded-l-xl  border border-gray-300"
           value={email} onChange={(e)=> setEmail(e.target.value)}
          />
          <button  onClick={subscribebtn} className="bg-black text-white font-semibold px-4 py-2 border border-gray-300">Subscribe</button>
        </section>
        {/* about */}
        <section className=" p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">About This Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We share powerful summaries from books that can help you grow, learn, and transform your life. Whether you're into self-help, business, or fiction — there's something for everyone.
          </p>
        </section>
      </div>
    </main>
  );
}
