import Image from "next/image";
import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";

const Comment = () => {
  return (
    <div className="p-6 rounded-lg">
      {/* Comments Header */}
      <h2 className="font-bold text-xl lg:text-2xl text-gray-800 mb-6">
        Comments - 03
      </h2>

      {/* Comments List */}
      <div className="space-y-6">
        {/* Single Comment */}
        <div className="flex space-x-4">
          <Image
            src="/client.png"
            alt="User"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div>
            <h3 className="text-lg flex gap-3 font-semibold text-gray-700">
              Md Sojib Khan{" "}
              <span className="text-sm flex text-blue-500 cursor-pointer">
                <LuReplyAll className="text-2xl" /> Reply
              </span>
            </h3>
            <p className="text-sm flex text-gray-500 gap-2">
              <IoCalendarNumberOutline className="text-xl text-yellow-500" /> June 22, 2022
            </p>
            <p className="mt-2 text-gray-600 lg:w-full w-[240px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus dolore atque optio ea nemo suscipit, accusantium.
            </p>
          </div>
        </div>

        {/* Another Comment */}
        <div className="flex space-x-4">
          <Image
            src="/client.png"
            alt="User"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div>
            <h3 className="text-lg flex gap-3 font-semibold text-gray-700">
              Md Sojib Khan{" "}
              <span className="text-sm flex text-gray-600 cursor-pointer">
                <LuReplyAll className="text-2xl" /> Reply
              </span>
            </h3>
            <p className="text-sm flex text-gray-500 gap-2">
              <IoCalendarNumberOutline className="text-xl text-yellow-500" /> June 22, 2022
            </p>
            <p className="mt-2 text-gray-600 lg:w-full w-[240px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores natus dolore atque optio ea nemo suscipit, accusantium.
            </p>
          </div>
        </div>
      </div>

      {/* Post a Comment - Desktop */}
      <div className="mt-8 lg:block hidden">
        <h3 className="text-lg font-semibold text-gray-800">Post a Comment</h3>
        <form className="mt-4 space-y-4">
          <div className="lg:flex space-x-4">
            <input
              type="text"
              placeholder="Name*"
              className="lg:w-1/2 p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="lg:w-1/2 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <textarea
            placeholder="Write a comment"
            className="lg:w-full p-2 border border-gray-300 rounded-lg h-24"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg"
          >
            Post a Comment
          </button>
        </form>
      </div>

      {/* Post a Comment - Mobile */}
      <div className="container px-5 py-24 mx-auto lg:hidden block">
        <form>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                    Email
                  </label>
                  
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 border border-gray-300 focus:border-yellow-500 rounded text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded border bg-gray-100 border-gray-300 focus:border-yellow-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg"
                >
                  Post a Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;



















