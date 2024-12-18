import React from 'react'

const AboutMe = () => {
    return (
        <div className='shadow-xl shadow-black border px-3 rounded-md opacity-90 border-[#00ff99] bg-gradient-to-r from-gray-900 to-gray-700'>
             <div className=' '>
                <h3 className="sm:text-4xl text-2xl py-3 font-bold">About Me</h3>
                <div className="flex px-3 flex-col lg:flex-row gap-6 text-center lg:text-left">
                  {/* Introductory Paragraph */}
                  <p className="max-w-3xl py-0 leading-5 tracking-tight sm:py-3 text-justify text-white/60 mx-auto lg:mx-0">
                    As a frontend developer, I specialize in crafting modern and efficient web interfaces. My expertise includes HTML, CSS, and Tailwind CSS for styling and layout, along with JavaScript, React, and TypeScript for building dynamic and interactive user experiences. I focus on writing clean, maintainable code and creating responsive designs that adapt seamlessly to different devices.
                  </p>

                  {/* Details Section */}
                  <div className="text-white/80 text-lg text-center ">
                    <ul className="divide-y divide-gray-700">
                      {/* Name */}
                      <li className="py-4 flex flex-col sm:flex-row sm:items-start gap-2">
                        <span className="font-semibold text-left sm:w-1/4">Name:</span>
                        <span className="text-white/70 sm:w-3/4 text-left">Abdur Rahman</span>
                      </li>

                      {/* Phone */}
                      <li className="py-4 flex flex-col sm:flex-row sm:items-start gap-2">
                        <span className="font-semibold  sm:w-1/4 text-left">Phone:</span>
                        <span className="text-white/70 sm:w-3/4 text-left">(+880) 01722341973</span>
                      </li>


                      {/* Email */}
                      <li className="py-4 flex flex-col sm:flex-row sm:items-start gap-2">
                        <span className="font-semibold  sm:w-1/4 text-left">Email:</span>
                        <span className="text-white/70 sm:w-3/4 text-left">abdurrahman19011@gmail.com</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

        </div>
    )
}

export default AboutMe