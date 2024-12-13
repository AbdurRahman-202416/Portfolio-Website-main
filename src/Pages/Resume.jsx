import React, {useState} from 'react'
import Navbar from '../Component/Navbar';


const Resume = () => {
    const portfolioItem = [
        { id: "experience", label: "Experience" },
                        { id: "education", label: "Education" },
                        { id: "skills", label: "Skills" },
                        { id: "achievements", label: "Achievements" },
                        { id: "research", label: "Research" },
                        { id: "about", label: "About Me" },
    ]

    const [portItem, setPortItem] = useState(portfolioItem)
    
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div
                dir="ltr"
                data-orientation="horizontal"
                className="flex flex-col xl:flex-row gap-16"
            >
                {/* Tab List */}
                <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="h-auto rounded-md p-4 text-primary flex flex-col w-full max-w-md mx-auto xl:mx-0 gap-6"
                    tabIndex={0}
                >
                    {portItem.map((tab, index) => (
                        <button
                            key={index}
                            type="button"
                            role="tab"
                            aria-selected={tab.id === "experience"}
                            aria-controls={`radix-${tab.id}-content`}
                            data-state={tab.id === "experience" ? "active" : "inactive"}
                            id={`radix-${tab.id}-trigger`}
                            className="inline-flex items-center w-full bg-gray-800 justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium transition-all focus:ring focus:ring-offset-2 focus:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm"
                            tabIndex={-1}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Panels */}
                <div className="min-h-[70vh] w-full">
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-experience-trigger"
                        id="radix-experience-content"
                        tabIndex={0}
                        className="min-h-[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 w-full"
                    >
                        {/* Experience Content */}
                        <div className="flex flex-col gap-8 text-center xl:text-left">
                            <h3 className="text-4xl font-bold">My Experience</h3>
                            <p className="max-w-lg text-white/60 mx-auto xl:mx-0">
                                I have specialized in iOS development, leading fintech projects to
                                ensure compliance standards, while conducting R&D in areas such as
                                data visualization, OCR, and facial recognition, with published
                                research contributions.
                            </p>

                            {/* Experience Items */}
                            <ul className="flex flex-col gap-8">
                                {/* Single Experience Item */}
                                {[
                                    {
                                        company: "Commure",
                                        location: "Montreal, Quebec",
                                        period: "Sep 2024 - Present",
                                        title: "Staff Software Engineer",
                                        description:
                                            "Leading software development projects, optimizing healthcare solutions, and mentoring junior developers.",
                                    },
                                    // Add more experience items here.
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-gray-700"
                                    >
                                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4">
                                            <div className="text-center lg:text-left">
                                                <h3 className="text-2xl font-bold text-accent">
                                                    {item.company}
                                                </h3>
                                                <p className="text-sm text-white/60">{item.location}</p>
                                            </div>
                                            <span className="text-accent text-sm lg:text-right">
                                                {item.period}
                                            </span>
                                        </div>
                                        <ul className="mt-4 pl-4 border-l-2 border-accent space-y-6">
                                            <li className="relative pl-6 group">
                                                <div className="absolute -left-1.5 w-2 h-2 bg-accent rounded-full opacity-75" />
                                                <h4 className="text-xl font-semibold">{item.title}</h4>
                                                <p className="text-white/60 text-sm mt-1">{item.description}</p>
                                            </li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Resume;
