import { blogDB } from "@/database/blogDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req ,{params}) {
    await blogDB()
    try {
          const {id} = await params ;
          if(!id){
            return NextResponse.json({success:false , message:"id is missing"},{status:200})
          }
          const blogs = await Blog.findById(id)
          if(!blogs) return NextResponse.json({success:false ,message:"blog not found"},{status:200} )
           return NextResponse.json({success:true , blogs})
    } catch (error) {
        return NextResponse.json({success:false , message:"internal server error"} ,{status:500})
    }
    
}