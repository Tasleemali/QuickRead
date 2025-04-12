import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true }, // can be URL or base64
    content: { type: String, required: true }, // blog body/content
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// ✅ Clear model cache in dev to prevent "OverwriteModelError"
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
