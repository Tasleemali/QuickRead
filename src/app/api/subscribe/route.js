// import { blogDB } from "@/database/blogDB";
// import Subscribe from "@/models/Subscribe";
// import { NextResponse } from "next/server";



// export async function POST(req) {
//     await blogDB()
//     try {
//           const {email} = await req.json()
//           const checkEmail = await Subscribe.findOne({email})
//           if(checkEmail){
//        return NextResponse.json({success:false , message:" you have already subscription"})
//           }
//             const sub = await Subscribe.save()
//             return NextResponse.json({success:true , message:"thank you for subscription" ,sub})
//     } catch (error) {
//         return NextResponse.json({success:false , message:"internal server error"},{status:500})
//     }
    
// }


import { blogDB } from "@/database/blogDB";
import Subscribe from "@/models/Subscribe";
import { NextResponse } from "next/server";

export async function POST(req) {
  await blogDB();

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const existing = await Subscribe.findOne({ email }); // ❗ use findOne instead of find

    if (existing) {
      return NextResponse.json({ success: false, message: "You have already subscribed" }, { status: 409 });
    }

    const newSub = new Subscribe({ email }); // ❗ Create new instance
    await newSub.save(); // ❗ Save it properly

    return NextResponse.json({ success: true, message: "Thank you for subscribing", sub: newSub }, { status: 201 });
  } catch (error) {
    console.error("Subscribe API Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
