import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:cursor-pointer hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>

              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              /> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
          

               <Link to='/' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Home
               </Link>

               <Link to='/about-us' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 About Us
               </Link>

               <Link to='/categories' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Categories
               </Link>
               
               <Link to='/new-releases' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 New Releases
               </Link>

               <Link to='/blogs' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Blogs
               </Link>

               <Link to='/contact-us' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Contact Us
               </Link>

              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
              <div>
                    <Link to ="/user">Login / Register</Link>  
              </div>          
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 flex flex-col bg-white">
          <Link to='/' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Home
          </Link>

            <Link to='/about-us' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 About Us
          </Link>

          <Link to='/categories' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Categories
          </Link>

           <Link to='/new-releases' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 New Releases
          </Link>

            <Link to='/blogs' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Blogs 
          </Link>

            <Link to='/contact-us' className="rounded-md px-3 py-2 text-lg font-medium text-gray-700">
                 Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;