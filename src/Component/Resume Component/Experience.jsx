import React from 'react'

const Experience = () => {
    return (
        <div>
            <ul className="mt-4 pl-1 sm:pl-4  bg-gradient-to-r from-gray-800 to-gray-700  space-y-6">
                {/* Sr. Software Engineer */}
                <li className="p-2 sm:p-4 rounded-xl  border border-[#00ff99]   shadow-black bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                        {/* Company Info */}
                        <div className="text-center lg:text-left"> 
                            <h3 class="text-2xl sm:text-4xl font-semibold py-4"> <span className='text-2xl mx-2 text-[#00ff99]'>💼</span>My Experience</h3>

                            <h3 className="text-[12px] sm:text-2xl font-bold text-[#00ff99] opacity-90">
                                KONA Software Lab LTD
                            </h3>
                            <p className="text-xs sm:text-sm text-white/60"> Gulshan -01 , Dhaka Bangladesh</p>
                        </div>
                    </div>

                    {/* Roles and Responsibilities */}
                    <ul className="mt-4 pl-3 sm:pl-4 border-l-2 border-accent space-y-4">
                       

                        <li className="relative pl-6 group">
                            <div className="absolute -left-1.5 w-2 h-2 bg-accent rounded-full opacity-75"></div>
                            <h4 className="text-sm sm:text-xl font-semibold text-[#00ff99]">
                                Trainee Software Engineer (Frontend)
                            </h4>
                            <span className="text-xs sm:text-sm opacity-90 text-[#00ff99] font-light block mt-1">
                                17 September 2024 - 16 December 2024
                            </span>
                            <p className="text-xs text-justify leading-5 tracking-tight sm:text-sm text-white/60 mt-1">
                                I recently completed my internship as a Graduate  Software Engineer at Kona Software Lab Limited,
                                a company known for its innovative software solutions. During my internship,
                                I had the opportunity to work on impactful projects that involved designing and developing efficient software
                                applications.
                                These experiences allowed me to strengthen my expertise in frontend technologies such as JavaScript, React.js, and Tailwind CSS, while gaining exposure to industry standards and best practices.
                                My internship journey has been an invaluable phase of learning and growth. I am now focused on further enhancing my skills and seeking new opportunities to create meaningful and innovative software solutions.

                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Experience