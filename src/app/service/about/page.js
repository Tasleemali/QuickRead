"use client"
import AboutPageSkeleton from '@/components/skeleton/aboutskeleton';
import { useState, useEffect } from 'react';


export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading (e.g., fetch data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time to match your real data fetching time
  }, []);

  if (loading) {
    return <AboutPageSkeleton/>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">
        About <span className="text-red-500">QuickRead</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-justify">
        Welcome to <span className="font-semibold text-red-500">QuickRead</span> – your personal gateway to powerful ideas from the world’s most influential books.
        We believe that great knowledge should be accessible, time-saving, and engaging for everyone.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">📚 What We Do</h2>
      <p className="text-base text-gray-700 mb-6 text-justify">
        We provide well-structured, long, and detailed chapter-wise summaries of best-selling non-fiction books.
        Whether it's productivity, self-help, psychology, or business — we break down complex ideas into easy-to-digest insights, so you don’t have to read the entire book unless you want to.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">🚀 Our Mission</h2>
      <p className="text-base text-gray-700 mb-6 text-justify">
        Our mission is to help readers grow smarter, faster. We make personal development easier by offering curated summaries that capture the essence of every chapter, allowing you to grasp powerful ideas in minutes, not hours.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">❤️ Why Readers Love Us</h2>
      <ul className="list-disc list-inside text-base text-gray-700 mb-6 space-y-2">
        <li>Chapter-wise summaries written in a smooth, blog-style format</li>
        <li>Perfect for busy people who want to learn faster</li>
        <li>No fluff, no filler – just powerful, practical ideas</li>
        <li>New book summaries added regularly</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">🌎 Join the Journey</h2>
      <p className="text-base text-gray-700 text-justify">
        Whether you’re a student, entrepreneur, or lifelong learner — QuickRead is here to fuel your knowledge journey. Explore our summaries, discover new books, and become a better version of yourself, one read at a time.
      </p>
    </div>
  );
}
