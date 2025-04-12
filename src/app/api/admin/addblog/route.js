import { blogDB } from "@/database/blogDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await blogDB();
    const body = await req.json();

    console.log("📦 Received body:", body); // 🐞 log incoming data

    const { title, category, subCategory, author, image, content } = body;

    if (!title || !category || !subCategory || !author || !image || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      title,
      category,
      subCategory,
      author,
      image,
      content,
      createdAt: new Date(),
    });

    await newBlog.save();

    return NextResponse.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    console.error("❌ Error in POST /api/admin/addblog:", error); // 💥 LOG ERROR
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
