import { blogDB } from "@/database/blogDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await blogDB();
  const { category } = await params;

  try {
    const book = await Blog.find({
      category: { $regex: new RegExp(category, 'i') }
    });

    return NextResponse.json({book}); // ✅ fixed
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message }, // ✅ also fixed `message.error`
      { status: 500 }
    );
  }
}

