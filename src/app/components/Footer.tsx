import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="text-black font-serif  mt-2">
            <div className="container bg-[#fafaf5] mx-auto p-6 shadow-lg shadow-[#2e1717] w-full max-w-[1536px]">




                {/* Links Section */}
                <div className=" text-sm sm:text-base md:text-lg  mb-3 grid grid-cols-2 md:grid-cols-4 sm:p-10 ">
                    <div>
                        <ul className="flex flex-col gap-4 lg:gap-6 pb-3 sm:pb-6">
                            <li className="font-medium text-[#9F9F9F]">Links</li>
                            <li className='hover:underline'><Link href={"/"}>Home</Link></li>
                            <li className='hover:underline'><Link href={"/blogs"}>Blogs</Link></li>
                            <li className='hover:underline'><Link href={"/about"}>About</Link></li>
                            <li className='hover:underline'><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 lg:gap-6 pb-3 sm:pb-6">
                            <li className="font-medium text-[#9F9F9F]">Help</li>
                            <li className='hover:underline'><Link href={"#"}>Payment Option</Link></li>
                            <li className='hover:underline'><Link href={"#"}>Follow Us</Link></li>
                            <li className='hover:underline'><Link href={"#"}>Privacy Policies</Link></li>
                            <li className='hover:underline'><Link href={"#"}>Links</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 lg:gap-6 pb-3 sm:pb-6">
                            <li className="font-medium text-[#9F9F9F]">Category 1</li>
                            <li className='hover:underline'><Link href={"#"}>JavaScript</Link></li>
                            <li className='hover:underline'><Link href={"#"}>HTML</Link></li>
                            <li className='hover:underline'><Link href={"#"}>CSS</Link></li>
                            <li className='hover:underline'><Link href={"#"}>TypeScript</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 lg:gap-6 pb-3 sm:pb-6">
                            <li className="font-medium text-[#9F9F9F]">Category 2</li>
                            <li className='hover:underline'><Link href={"#"}>React JS</Link></li>
                            <li className='hover:underline'><Link href={"#"}>Next JS</Link></li>
                            <li className='hover:underline'><Link href={"#"}>AI</Link></li>
                            <li className='hover:underline'><Link href={"#"}>Machine Learning</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className='mt-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center '>
                    {/* Subscribe Section */}
                    <div className="group30 flex flex-col items-start gap-2 ">
                        <p className="font-medium text-base text-[#9F9F9F]">Subscribe to get more info</p>
                        <form className="group29 flex flex-row gap-4 items-center">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="text-[#9F9F9F] text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 border-b-2 border-gray-300 focus:outline-none  resize-none bg-[#e9e5d5] focus:border-gray-800"
                                required
                            />
                            <button
                                type="submit"
                                className="text-xs sm:text-sm lg:text-lg px-2 py-1 sm:px-4 sm:py-2 bg-[#9F9F9F] text-white rounded hover:bg-[#7F7F7F] transition"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                    <p  className="text-sm sm:text-base md:text-lg font-normal  text-[#9F9F9F] mt-3">
                        400 University Drive Suite 200 Coral <br />
                        Gables, <br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Footer Bottom Section */}
                <div className="w-full font-normal text-sm sm:text-base mt-3 ">
                    <hr />
                    <p className="mt-3 text-left">
                        2022 Meubel House. All rights reserved
                    </p>
                </div>


            </div>
        </footer>
    )
}
