import React from 'react'
import Navbar from '../Component/Navbar'

const Contact = () => {
  return (
    <div className='bg-[#0A2647]'>
      <div>
        <Navbar />
      </div>
      <div className=' mx-auto w-[95%] leading-4 tracking-[opx] sm:leading-none sm:tracking-tight  text-justify text-lg   sm:text-3xl font-semibold opacity-70 sm:w-full '>
        <h1  >I’m always excited to collaborate on creative projects,
          bring ideas to life, or solve challenging problems.
          If you’re looking for a passionate and skilled developer to join forces,
          feel free to get in touch! </h1>
        <span className=" py-4 mx-[45%] w-[5%]  loading text-center text-4xl text-[#00ff99] loading-infinity loading-lg"></span>
      </div>
      <section
        className="py-5 mx-auto"
        style={{ opacity: 0.9 }}
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-10 ">
            {/* Contact Info Section */}
            <div className="w-full xl:w-1/2 flex items-center justify-center">
              <ul className="space-y-6 md:space-y-10">
                <li className="flex items-center gap-4 md:gap-6">
                  <div className="w-[72px] h-[72px] flex items-center justify-center bg-gray-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 text-[#00ff99]"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-400">Phone</p>
                    <h3 className="text-lg md:text-xl text-[#F6FAB9]">(+880) 01722341973</h3>
                  </div>
                </li>

                <li className="flex items-center gap-4 md:gap-6">
                  <div className="w-[72px] h-[72px] flex items-center justify-center bg-gray-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 text-[#00ff99]"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-400">Email</p>
                    <h3 className="text-lg md:text-xl text-[#F6FAB9]">abdurrahman19011@gmail.com</h3>
                  </div>
                </li>

                <li className="flex items-center gap-4 md:gap-6">
                  <div className="w-[120px] h-[72px] flex items-center justify-center bg-gray-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                      className=" w-16 h-14 md:w-10 md:h-10 xl:w-12 xl:h-12 text-[#00ff99]"
                    >
                      <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-400">Location</p>
                    <h3 className="text-lg md:text-xl capitalize text-[#F6FAB9]">
                      Kaderabad housing Road-no:05, Block:G, Mohammadpur, Dhaka-1207, Bangladesh
                    </h3>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form Section */}
            <div className="w-full xl:w-1/2 bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 text-[#F6FAB9] px-6 py-8 sm:px-10 flex sm:justify-between rounded-lg">
              <form>
                <h3 className="text-[20px] sm:mb-10 flex justify-center md:text-4xl font-semibold ">
                  Let's Work Together <span className="text-2xl px-4 sm:text-4xl  text-[#00ff99]">.</span>
                </h3><hr className='py-1 bg-[#0A2647] mx-1 hover:bg-slate-800 border border-slate-700 shadow-slate-900 rounded-xl shadow-2xl mt-3' />

                <div className="space-y-3 mt-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded border border-gray-400 bg-[#0A2647] p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ff99] dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded border border-gray-400 p-3 bg-[#0A2647] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ff99] dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full rounded border border-gray-400 bg-[#0A2647] p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ff99] dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
                  />
                  <textarea
                    rows="4"
                    name="details"
                    placeholder="Message"
                    className="w-full rounded border resize-none border-gray-300 p-3 bg-[#0A2647] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ff99] dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 rounded-3xl border border-white text-[#0A2647] hover:bg-[#0A2647] hover:text-[#00ff99] font-bold bg-[#00ff99] p-3 transition focus:outline-none focus:ring-1 focus:ring-[#00ff99]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
