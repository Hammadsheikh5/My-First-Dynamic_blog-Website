'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hero2 from '../components/hero2';
import Image from 'next/image';

interface Iblog {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  content: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Iblog[]>([]);

  useEffect(() => {
    // Fetch data from the API or JSON file
    fetch('/data/post.json')  // Adjust this path based on where your posts.json is located
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="text-black font-serif ">

      <Hero2 />
      <div className="container mx-auto p-6 shadow-lg shadow-[#2e1717] w-full max-w-[1536px] bg-[#fafaf5]">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Blogs :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#e9e5d5]  shadow-md shadow-[#2e1717] rounded-lg p-4 transform transition-all duration-300 hover:scale-105">
              <Image
                src={`/card images/${post.image}`}
                alt={post.title}
                width={400} // Adjust width as per your requirement
                height={192} // Adjust height as per your requirement
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{post.description}</p>
              <Link href={`/blogs/${post.id}`} className="text-blue-500 mt-4 text-sm sm:text-base inline-block">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
