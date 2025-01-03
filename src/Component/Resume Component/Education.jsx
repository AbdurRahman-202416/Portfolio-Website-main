import React from 'react'

const Education = () => {
    return (
        <div> <div className="flex flex-col gap-8 text-center xl:text-left">
            <h3 className=" text-2xl leading-4 sm:text-4xl font-bold"><span className='mx-2 p-1'>🎓</span> My Education</h3>
            <p className="max-w-3xl leading-4 text-white/60 mx-auto xl:mx-0">
                Here's an overview of my academic background and key qualifications.
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* B.Sc Honours */}
                <li className=" shadow-xl shadow-black border border-[#00ff99] bg-gradient-to-r from-gray-900 to-gray-800 py-4 sm:py-0 text-left  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                    <span className="text-[#00ff99] text-left">2019 - 2024</span>
                    <h3 className="sm:text-lg max-w-[260px] min-h-[60px]  text-[20px] text-base ">
                        B.Sc Honours in Computer Science & Engineering
                    </h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-white/60 text-sm">
                            <strong>University:</strong> National University
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Institute:</strong> Institute of Science and Technology
                            (IST), Dhanmondi, Dhaka
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Session:</strong> 2018-2019
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Result:</strong>Coming Soon.
                        </p>
                    </div>
                </li>

                {/* H.S.C */}
                <li className=" shadow-xl shadow-black border border-[#00ff99] bg-gradient-to-r from-gray-900 to-gray-800 py-3 px-10 rounded-xl flex flex-col justify-center items-center text-left lg:items-start gap-2">
                    <span className="text-[#00ff99]">2016 - 2018</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px]  lg:text-left">
                        Higher Secondary Certificate (H.S.C)
                    </h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-white/60 text-sm">
                            <strong>Board:</strong>H.S.C Education Board,
                            Dhaka, Bangladesh
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Institute:</strong> Syed Abul Hossain University College,
                            Madaripur
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Group:</strong> Science
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Result:</strong> GPA 4.25 out of 5.00
                        </p>
                        <p className="text-white/60 text-sm">
                            <strong>Passing Year:</strong> 2018
                        </p>
                    </div>
                </li>

            </ul>
        </div></div>
    )
}

export default Education