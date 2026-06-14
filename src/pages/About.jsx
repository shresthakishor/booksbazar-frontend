import React from 'react'
import Hero from './Hero'
import FooterMenu from '../../common/FooterMenu'

const About = () => {
  return (
    <div>
    {/* <div className="bg-[#f3e2c9] px-2 sm:px-6 lg:px-8"> */}
   <div
  className="relative bg-[url('https://images.pexels.com/photos/18797448/pexels-photo-18797448.jpeg')] bg-cover bg-center px-2 sm:px-6 lg:px-8"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/75"></div>

  {/* Content */}
  <div className="relative container mx-auto px-2 sm:px-6 lg:px-8 py-16">
    <h1 className="text-3xl font-bold text-orange-800 mb-4 text-center">
      About Us
    </h1>
    <p className="text-center text-gray-800">
      Learn more about Books Nepal
    </p>
  </div>
</div>
    <div className="container text-lg text-gray-900 mx-auto px-2 sm:px-6 lg:px-8 py-10">
          <p>
            Welcome to Books Land Nepal, your one-stop destination for books that inspire, educate, and entertain. We are passionate about bringing the joy of reading to book lovers across Nepal. Whether you're searching for bestsellers, academic books, novels, or rare finds, we strive to make every book accessible to our readers.
          </p>
          <div className='mt-7'>
           <h3 className='text-orange-500 text-3xl font-bold'>Our Mission</h3>
           <p className='mt-5'>
            At <b>Books Land Nepal</b>, we believe that books have the power to transform lives. Our mission is to create a community of readers by providing a diverse collection of books at affordable prices. We are committed to promoting literacy, education, and a love for reading in Nepal.
           </p>

            <h3 className='text-orange-500 text-3xl font-bold mt-7'>What We Offer</h3>
            <p className='mt-5'>
              </p><ul className='list-disc list-inside'>
                <li><b>Wide Collection</b>: A wide selection of books across various genres and categories.</li>
                <li><b>Easy Shopping Experience</b>: A user-friendly online store for seamless browsing and purchasing..</li>
                <li><b>Affordable Prices</b>: Competitive pricing and exciting discounts.</li>
                <li><b>Customer Support</b>: Exceptional customer service to assist you with your book needs.</li>
              </ul>

            <h3 className='text-orange-500 text-3xl font-bold mt-7'>Why Choose Us</h3>
            <p className='mt-5'>
              </p><ul className='list-disc list-inside'>
                <li><b>Passion for Books</b>: Handpicked collections ensuring quality and variety.</li>
                <li><b>Supporting Local Authors</b>: Promoting Nepali authors and their works.</li>
                <li><b>Convenience at your Fingertips</b>: Shop from home and explore an extensive range of books.</li>

              </ul>

           </div>
    </div>
           <FooterMenu/>
    </div>
  )
}

export default About