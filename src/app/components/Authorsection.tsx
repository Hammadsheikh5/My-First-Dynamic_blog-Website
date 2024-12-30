'use client'
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';





export default function AuthorSection() {
  return (
    <div className="text-black font-serif mt-2">

      <div className="section  w-full max-w-[1536px] bg-[#fafaf5]  mx-auto shadow-lg shadow-[#2e1717] p-5 rounded-lg">
        <div className="flex items-center gap-2 ">
          <Image
            width={900}
            height={600}
            className="w-16 h-16 sm:h-24 sm:w-24 lg:w-36 lg:h-36 rounded-full object-cover border-2 border-[#2e1717]"
            src="/author/Author-image.png"
            alt="author-image" />
          <div>
            <p className="text-base sm:text-md md:text-xl lg:text-2xl font-bold">Hammad Sheikh</p>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-600">Tech enthusiast | blogger sharing insights on coding</p>
          </div>
        </div>

        <div className="bio mt-2 ">
          <p className="text-xs sm:text-sm lg:text-lg font-light">
            &quot;A passionate blogger with a love for technology, coding, and innovation. Sharing expert insights on web development, programming languages like TypeScript, Python, and JavaScript, as well as the latest trends in AI. Always learning and exploring new tools to inspire and help fellow tech enthusiasts and developers.&quot;
          </p>

        </div>
        <div className="flex mt-2 text-base sm:text-lg lg:text-2xl gap-3 ">
          <Link href='#'><FaFacebookF /></Link>
          <Link href='#'><FaTwitter /></Link>
          <Link target="_blank" href='https://www.linkedin.com/in/hammad-sheikh-51294b284/'><FaLinkedin /></Link>
          <Link target="_blank" href='https://github.com/Hammadsheikh5'><FaGithub /></Link>
        </div>

      </div>

    </div>
  )
}
