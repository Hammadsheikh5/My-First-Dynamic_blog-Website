'use client'

import AuthorSection from '@/app/components/Authorsection';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import Image from 'next/image';



interface BlogPost {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  content: string[];

}

interface Comment {
  name: string;
  message: string;
}



const BlogDetails = () => {
  const { blog } = useParams(); // Extract the dynamic route parameter
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const newComment: Comment = { name, message };
      setComments([...comments, newComment]);
      setName('');
      setMessage('');
    }
  };

  const renderComment = comments.length === 0 ? (
    <p className='text-black '>No older comments</p>
  ) : (
    comments.map((comment, index) => (
      <div key={index} className="flex flex-col ">

        <p className='text-sm font-semibold underline mb-1'>{comment.name}</p>
        <p className='text-sm mb-4 text-wrap'>{comment.message}</p>
      </div>
    ))
  );

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Remove dislike if liked
  };
  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Remove like if disliked
  };


  useEffect(() => {
    // Fetch the blog data from the JSON file
    fetch('/data/post.json')
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.posts.find((p: BlogPost) => p.id.toString() === blog);
        setPost(foundPost);
      })
      .catch((err) => console.error('Error fetching blog details:', err));
  }, [blog]);

  if (!post) return <p>Loading...</p>; // Show a loading state while fetching data

  return (
    <div className='text-black font-serif  bg-[#fafaf5] p-5 sm:p-10'>
      <div className="bg-[#e9e5d5]  w-full max-w-[800px] mx-auto h-auto shadow-lg shadow-[#2e1717] p-4 rounded-xl">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{post.title}</h1>
        <Image
          src={`/card images/${post.image}`}
          alt={post.title}
          width={900} // Replace with the desired width for the image
          height={600} // Replace with the desired height for the image
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-gray-700 text-sm sm:text-base md:text-md lg:text-xl mb-4">{post.description}</p>
        <div className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-justify">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <Link href={post.link} target='_blank'>          <p className='text-blue-700  text-xs sm:text-sm md:text-base lg:text-lg mb-4 underline inline-block '>Click on this link to get more info and learn </p></Link>

        {/* like section  */}
        <div className='h-5 w-[50px] sm:h-7 sm:w-[65px] lg:h-8 lg:w-[80px] rounded-3xl  mb-4  flex items-center justify-around text-sm sm:text-base lg:text-lg'>
          <button onClick={handleLike}
            className={`flex-1 ${liked ? 'bg-black text-white' : 'bg-transparent'} p-2 rounded-3xl transition-all duration-200 hover:bg-gray-400`}
          ><SlLike /></button>
          <button onClick={handleDislike}
            className={`flex-1 ${disliked ? 'bg-black text-white' : 'bg-transparent'} p-2 rounded-3xl transition-all duration-200 hover:bg-gray-400`}
          ><SlDislike /></button>
        </div>

        {/* Comment Section */}
        <div className="comment-section ">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Comments</h3>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="comment-form mb-4">
            <div className="mb-4 text-sm sm:text-base lg:text-md">
              <label htmlFor="name" className="block ">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder='Enter Your Name'
                onChange={(e) => setName(e.target.value)}
                className="border-b-2 border-gray-300  bg-[#e9e5d5] p-2 w-full focus:outline-none focus:border-b-3 focus:border-gray-800 resize-none"
                required
              />
            </div>

            <div className="mb-4 text-sm sm:text-base lg:text-md">
              <label htmlFor="message" className="block ">Your Comment</label>
              <input
                id="message"
                value={message}
                placeholder='Add a Comment'
                onChange={(e) => setMessage(e.target.value)}
                className="border-b-2 border-gray-300  bg-[#e9e5d5] p-2 w-full focus:outline-none focus:border-b-3 focus:border-gray-800 resize-none "

                required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2  rounded-xl">Post Comment</button>
          </form>
          <div className="mb-4">
            {renderComment}
          </div>
        </div>
        <AuthorSection />
      </div>
    </div>

  );
};

export default BlogDetails;
