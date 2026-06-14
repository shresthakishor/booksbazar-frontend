import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
   <div className="bg-[#f3e2c9] flex relative z-20 items-center">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 flex justify-center items-center flex-col">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover Your Next Favorite Book</h1>
                    <p className="text-lg mb-6">Explore our vast collection of books across all genres. Find your next great read today!</p>
                   <Link to="/categories" className="bg-orange-500 text-white px-6 py-3 rounded">
                    DISCOVER MORE
                   </Link>
                   
                </div>
                <div className="flex gap-4 items-center justify-center">
                    
                    <div className="h-fit w-full">
                    <img src="https://images.pexels.com/photos/18797448/pexels-photo-18797448.jpeg" alt="Books" className="w-full h-full object-cover" />
                    </div>

                                     
                   
                </div>
         </div>
      </div>
  )
}

export default Hero