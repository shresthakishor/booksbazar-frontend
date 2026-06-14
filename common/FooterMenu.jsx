import React from 'react'
import { IoBook } from 'react-icons/io5'
import Footer from './Footer'

const FooterMenu = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-4 gap-8">

        <div className="flex flex-col mt-10 items-center gap-2">
          <p className='text-3xl md:text-4xl'><IoBook/></p>
          <h3 className="text-xl md:text-3xl font-bold mb-4">Books Mart</h3>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Categories
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Blogs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
        
          </ul>
        </div>

         <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Best Sellers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                On Sale
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                E-Books
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Featured
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Editorial Picks
              </a>
            </li>
        
          </ul>
        </div>


         <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Track Order
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Delivery & Returns
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                FaQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Community
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Terms and Conditions
              </a>
            </li>
        
          </ul>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default FooterMenu