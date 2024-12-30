'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface Iblog {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    content: string; 
}

const RecentBlogs = () => {
    const [posts, setPosts] = useState<Iblog[]>([]);

    useEffect(() => {
        fetch('/data/post.json')  // Path relative to the public folder
            .then((response) => response.json())
            .then((data) => setPosts(data.posts.slice(4, 7))) // Only take the first 3 posts
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="text-black   font-serif mt-2">
            <div className="container bg-[#fafaf5] mx-auto p-6 shadow-lg shadow-[#2e1717] w-full max-w-[1536px]">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Recent Blogs</h1>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-[#e9e5d5]  shadow-md shadow-[#2e1717] rounded-lg p-4 transform transition-all duration-300 hover:scale-105">
                            <Image
                                src={`/card images/${post.image}`}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-md"
                                width={900} 
                                height={600} 
                            />
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">{post.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base ">{post.description}</p>
                            <Link href={`/blogs/${post.id}`} className="text-blue-500 mt-4 text-sm sm:text-base inline-block">Read More</Link>
                        </div>
                    ))}
                </div>
                <Link href='/blogs'><p className="text-blue-500 mt-6  text-center text-lg sm:text-xl lg:text-2xl">View All Blogs</p></Link>

            </div>

        </div>
    );
};

export default RecentBlogs;
