import { blogDB } from "@/database/blogDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";


export async function GET() {
    try {
      await blogDB()
        const blogs = await Blog.find()
        return NextResponse.json({Success:true , blogs})
    } catch (error) {
      return NextResponse.json({Success:false , message:"internal server error"} ,{status:500})  
    }
    
}