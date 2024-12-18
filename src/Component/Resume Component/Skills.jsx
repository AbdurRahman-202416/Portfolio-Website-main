import React from 'react'

const Skills = () => {
    return (
        <div className='shadow-xl  h-[510px]  leading-5 tracking-tight sm:h-[460px] mx-2 rounded-md px-3 py-3 opacity-95 shadow-black border border-[#00ff99] bg-gradient-to-r from-gray-900 to-gray-800'>
            <div>
                <h4 className="text-2xl sm:text-4xl dark:text-white font-bold mb-6">Skills</h4>

                <p className="max-w-3xl text-white/60 mx-auto text-justify py-2 xl:mx-0">
                    Specialized in crafting responsive and user-friendly web interfaces, writing clean and maintainable code, and optimizing performance. Experienced in building dynamic applications, integrating APIs, and delivering scalable solutions in collaborative environments.
                </p>
                <div className="h-screen flex justify-center items-start">

                    <div className=" mx-auto w-full">


                        {/* Skill: HTML, CSS */}
                        <div className="mb-7">
                            <div className="flex justify-between">
                                <span className="text-base text-gray-500 font-semibold dark:text-gray-400">HTML, CSS</span>
                                <span className="text-base font-semibold text-gray-500 pr-5 dark:text-gray-400">80%</span>
                            </div>
                            <svg className="rc-progress-line shadow-2xl shadow-black rounded-xl" viewBox="0 0 100 1" preserveAspectRatio="none">
                                <path
                                    className="rc-progress-line-trail"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#D9D9D9"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                />
                                <path
                                    className="rc-progress-line-path"
                                    d="M 0.5,0.5 L 79.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#00ff99"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                    style={{
                                        strokeDasharray: '80px, 100px',
                                        strokeDashoffset: '0px',
                                        transition: 'stroke-dasharray 0.3s ease',
                                    }}
                                />
                            </svg>
                        </div>

                        {/* Skill: JavaScript */}
                        <div className="mb-7">
                            <div className="flex justify-between py-1">
                                <span className="text-base text-gray-500 font-semibold dark:text-gray-400">JavaScript</span>
                                <span className="text-base font-semibold text-gray-500 pr-5 dark:text-gray-400">90%</span>
                            </div>
                            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                <path
                                    className="rc-progress-line-trail"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#D9D9D9"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                />
                                <path
                                    className="rc-progress-line-path"
                                    d="M 0.5,0.5 L 89.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#00ff99"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                    style={{
                                        strokeDasharray: '90px, 100px',
                                        strokeDashoffset: '0px',
                                        transition: 'stroke-dasharray 0.3s ease',
                                    }}
                                />
                            </svg>
                        </div>

                        {/* Skill: React JS */}
                        <div className="mb-7">
                            <div className="flex justify-between py-1">
                                <span className="text-base text-gray-500 font-semibold dark:text-gray-400">React JS</span>
                                <span className="text-base font-semibold text-gray-500 pr-5 dark:text-gray-400">70%</span>
                            </div>
                            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                <path
                                    className="rc-progress-line-trail"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#D9D9D9"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                />
                                <path
                                    className="rc-progress-line-path"
                                    d="M 0.5,0.5 L 69.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#00ff99"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                    style={{
                                        strokeDasharray: '70px, 100px',
                                        strokeDashoffset: '0px',
                                        transition: 'stroke-dasharray 0.3s ease',
                                    }}
                                />
                            </svg>
                        </div>

                        {/* Skill: TypeScript */}
                        <div className="mb-7">
                            <div className="flex justify-between py-1">
                                <span className="text-base text-gray-500 font-semibold dark:text-gray-400">TypeScript</span>
                                <span className="text-base font-semibold text-gray-500 pr-5 dark:text-gray-400">50%</span>
                            </div>
                            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                                <path
                                    className="rc-progress-line-trail"
                                    d="M 0.5,0.5 L 99.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#D9D9D9"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                />
                                <path
                                    className="rc-progress-line-path"
                                    d="M 0.5,0.5 L 49.5,0.5"
                                    strokeLinecap="round"
                                    stroke="#00ff99"
                                    strokeWidth="1"
                                    fillOpacity="0"
                                    style={{
                                        strokeDasharray: '50px, 100px',
                                        strokeDashoffset: '0px',
                                        transition: 'stroke-dasharray 0.3s ease',
                                    }}
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills