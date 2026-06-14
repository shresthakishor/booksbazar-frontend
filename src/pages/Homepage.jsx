import React from "react";
import Hero from "./Hero.jsx";
import { Link } from "react-router";
import FooterMenu from "../../common/FooterMenu.jsx";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center font-bold mb-8">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* New releases content */}
          <div className="bg-zinc-100 rounded-lg p-6">
            <div>
              <img
                src="https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/book-08.jpg"
                alt="Book 1"
                className="w-full h-full rounded-lg object-cover mb-5"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold">Cyber Angel</h3>
              <span className="font-semibold">By:</span>
              <span className="text-gray-600 text-lg">John Roberts</span>
            </div>
            <p className="text-gray-800 text-lg font-bold">$19.99</p>
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>

          <div className="bg-zinc-100 rounded-lg p-6">
            <div>
              <img
                src="https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/book-07.jpg"
                alt="Book 1"
                className="w-full h-full rounded-lg object-cover mb-5"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold">Ark Forging</h3>
              <span className="font-semibold">By:</span>
              <span className="text-gray-600 text-lg">John Roberts</span>
            </div>
            <p className="text-gray-800 text-lg font-bold">$19.99</p>
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>

          <div className="bg-zinc-100 rounded-lg p-6">
            <div>
              <img
                src="https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/book-06.jpg"
                alt="Book 1"
                className="w-full h-full rounded-lg object-cover mb-5"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold">2024 Sanctuary</h3>
              <span className="font-semibold">By:</span>
              <span className="text-gray-600 text-lg">John Roberts</span>
            </div>
            <p className="text-gray-800 text-lg font-bold">$19.99</p>
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>

          <div className="bg-zinc-100 rounded-lg p-6">
            <div>
              <img
                src="https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/book-05.jpg"
                alt="Book 1"
                className="w-full h-full rounded-lg object-cover mb-5"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold">Feugiat Maecenas</h3>
              <span className="font-semibold">By:</span>
              <span className="text-gray-600 text-lg">Grace Bryant</span>
            </div>
            <p className="text-gray-800 text-lg font-bold">$19.99</p>
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/new-releases"
            className="bg-orange-500 text-white px-6 py-3 rounded"
          >
            View All New Releases
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Choose By Category
        </h1>
        <p className="text-center mt-4 text-lg">
          Explore our wide range of book categories and find your next great
          read!
        </p>
      </div>

      <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-5 gap-2 auto-rows-[200px] mt-5 mb-2 p-2">
        <div className="relative">
          <img
            src="https://media.gettyimages.com/id/1885512829/photo/assam-book-fair-2023-24.jpg?s=612x612&w=gi&k=20&c=BLT_-pm0JJwFzG-hKT0HdRfeCihyEmRmpGUv5wfIL2Y="
            alt="Fiction"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">Biography</h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images-platform.99static.com//ICTqU8FyPSYdlyXywv_BBy3jN6g=/937x0:3483x2546/fit-in/590x590/projects-files/74/7417/741767/fa00a3b6-e32b-4f7e-83ac-30d4b0d1c26c.jpg"
            alt="Fiction"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">Fiction</h2>
          </div>
        </div>

        <div className="relative col-span-2 row-span-2">
          <img
            src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?_gl=1*13kvnl*_ga*MTExOTEyOTI0MC4xNzgwMjEyMTk3*_ga_8JE65Q40S6*czE3ODAyMTIxOTYkbzEkZzEkdDE3ODAyMTM3MDgkajU0JGwwJGgw"
            alt="Fiction"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">
              Finance & Accounting
            </h2>
          </div>
        </div>
        {/* <div className="bg-blue-600 col-span-2 row-span-2"></div> */}

        {/* This will now span 2 rows */}
        <div className="relative">
          <img
            src="https://images-platform.99static.com//mNouFd2wEO1xRTHrEsQHQe1tL24=/538x0:1867x1329/fit-in/590x590/99designs-contests-attachments/69/69950/attachment_69950496"
            alt="Fiction"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">Comic</h2>
          </div>
        </div>

        <div className="relative col-span-2">
          <img
            src="https://images.pexels.com/photos/6353770/pexels-photo-6353770.jpeg?_gl=1*1fzol3q*_ga*MTExOTEyOTI0MC4xNzgwMjEyMTk3*_ga_8JE65Q40S6*czE3ODAyMTIxOTYkbzEkZzEkdDE3ODAyMTQ0MDUkajYwJGwwJGgw"
            alt="Self Help"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">Self Help</h2>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.pexels.com/photos/13638477/pexels-photo-13638477.jpeg?_gl=1*upz38z*_ga*MTExOTEyOTI0MC4xNzgwMjEyMTk3*_ga_8JE65Q40S6*czE3ODAyMTIxOTYkbzEkZzEkdDE3ODAyMTQ2MzckajUxJGwwJGgw"
            alt="Self Help"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold z-10">
              Arts & Photography{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-10">
        <Link
          to="/categories"
          className="bg-orange-500 text-white px-6 py-3 rounded"
        >
          View All Categories
        </Link>
      </div>


      <FooterMenu />
    </div>
  );
};

export default Homepage;
