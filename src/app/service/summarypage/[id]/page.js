"use client";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons";

const BlogPage = () => {
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const pathname = useParams();
  const currentUrl = typeof window !== "undefined" ? window.location.origin + pathname : "";


  useEffect(() => {
    async function fetchblog() {
      setLoading(true)
      try {
        const res = await fetch(`/api/client/get/${id}`);
        const data = await res.json();
        setBlogData(data.blogs);
        setLoading(false)
      } catch (error) {
        console.log("fetching error");
      }
    }
    fetchblog();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-gray-500">
        Loading...
      </div>
    )
  }
  if (!blogData) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-gray-500">
        Not available
      </div>
    )
  }


  const encodedTitle = encodeURIComponent(blogData.title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const shareLinks = {
    // whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%0A${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };
  return (
    <div className="bg-white text-black">
      <div className="grid grid-cols-1 md:flex place-items-center md:justify-around items-start m-4">
        <div className="max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-bold text-start mb-4">
            {blogData.title}
          </h1>
              {/* Share Buttons */}
              <div className="flex gap-4 mb-6">
            {/* <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded-full hover:scale-110 transition">
              <FaWhatsapp size={20} />
            </a> */}
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition">
              <Facebook size={20} />
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:scale-110 transition">
              <X size={20} />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-2 rounded-full hover:scale-110 transition">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                className="w-10 h-10 rounded-full"
                alt="Author"
              />
              <p className="text-gray-500">By: {blogData.author}</p>
            </div>
            <p className="text-[12px] text-gray-500">
              <span>{blogData.category}</span> ·{" "}
              <span>Updated: {blogData.createdAt}</span>
            </p>
          </div>

          <div className="flex justify-center items-center mt-6 mb-8">
            <img
              src={blogData.image}
              alt="Blog"
              className="mb-5 rounded-md max-h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="space-y-4">
            {blogData.content.split(/\n+/).map((line, index) => {
              const h2Match = line.match(/^##\s+(.+)/);
              const h3Match = line.match(/^###\s+(.+)/);

              if (h2Match) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-8 mb-4 text-black scroll-mt-24"
                  >
                    {h2Match[1]}
                  </h2>
                );
              }

              if (h3Match) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold mt-6 mb-3 text-gray-800 scroll-mt-24"
                  >
                    {h3Match[1]}
                  </h3>
                );
              }

              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
