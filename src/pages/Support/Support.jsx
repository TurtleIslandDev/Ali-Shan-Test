import React from "react";

const Support = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-lg font-semibold">ChatGPT</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Image Generator
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Explore GPTs
          </li>
        </ul>
        <h3 className="mt-6 text-sm text-gray-500">Today</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            ChatGPT Homepage Tailwind
          </li>
        </ul>
        <h3 className="mt-6 text-sm text-gray-500">Yesterday</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Object Key Grouping
          </li>
        </ul>
        <h3 className="mt-6 text-sm text-gray-500">Previous 7 Days</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            API CRUD
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Network Error
          </li>
        </ul>
        <button className="mt-auto bg-green-600 text-white py-2 rounded-lg hover:bg-green-500">
          Upgrade Plan
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-semibold">What can I help with?</h1>
        <div className="mt-6 w-full max-w-2xl">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center">
            <input
              type="text"
              placeholder="Message ChatGPT"
              className="w-full bg-transparent outline-none text-white px-2"
            />
            <button className="ml-2 text-gray-400 hover:text-white">🔍</button>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-600 px-4 py-2 rounded-lg">
            Create Image
          </button>
          <button className="bg-purple-600 px-4 py-2 rounded-lg">
            Help Me Write
          </button>
          <button className="bg-yellow-600 px-4 py-2 rounded-lg">
            Summarize Text
          </button>
        </div>
      </main>
    </div>
  );
};

export default Support;
