'use client';
import { useState } from 'react';

export default function AddBlogsPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subCategory:'',
    author: '',
    image: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/addblog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Blog added successfully!');
        setFormData({ title: '', category: '' ,subCategory:'', author: '', image: '', content: '' });
      } else {
        alert('Failed to add blog.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl"
          required
        />
         <input
          type="text"
          name="subCategory"
          placeholder="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl h-40 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
