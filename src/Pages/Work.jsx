
import Navbar from '../Component/Navbar'
import cal from "../assets/Calculator.jpeg"
import linkSh from "../assets/LinkShare.jpeg"
import Movie from "../assets/movie.jpeg"
import weather from "../assets/Weather.jpeg"
import protfolio from "../assets/protfolio.jpeg"
import job from "../assets/job.jpeg"
import { Link } from 'react-router-dom'


const Work = () => {


    const projects = [
        {
            title: "Morden Web Calculator ",
            description: "Interactive Calculator Application with Keyboard Support and Sound Effects",
            technologies: ["HTML-5", "CSS", "Tailwind Css", "JavaScript, etc."],
            image: cal,
            demoLink: "https://abdurrahman-202416.github.io/web-calculator/",
            repoLink: "https://github.com/AbdurRahman-202416/web-calculator",
        },
        {
            title: "Link Share WebApp",
            description:
                "Centralize your digital Identity. Manage and share your links with a single profile.",
            technologies: ["Tailwind Css", "JavaScript", "React js", "Axios", "etc."],
            image: linkSh,
            demoLink: "https://create-profile-link.vercel.app/",
            repoLink: "https://github.com/AbdurRahman-202416/create-profile-link",
        },
        {
            title: "Movie List",
            description:
                "Movie Gallery Web Application built using React Js (including Tailwind Css for styling).",
            technologies: ["Tailwind Css", "JavaScript", "React js", "Axios", "etc."],
            image: Movie,
            demoLink: "https://abdurrahman-202416.github.io/movie-list-app/",
            repoLink: "https://github.com/AbdurRahman-202416/movie-list-app",
        },
        {
            title: "Weather Clock WebApp",
            description:
                "Digital Clock with Weather Checker.",
            technologies: ["Tailwind CSS", "React js, Axios"],
            image: weather,
            demoLink: "https://abdurrahman-202416.github.io/weather-digital-clock/",
            repoLink: "https://github.com/AbdurRahman-202416/weather-digital-clock",
        },
        {
            title: "Protfolio Website",
            description:
                "A personal portfolio website to showcase my skills, projects, and resume.",
            technologies: ["Tailwind Css", "JavaScript", "React js", "Axios", "etc."],
            image: protfolio,
            demoLink: "https://portfolio-website-main-sigma.vercel.app/",
            repoLink: "https://github.com/AbdurRahman-202416/Portfolio-Website-main",
        },
        {
            title: "React JobHub",
            description:
                "Employers can post detailed job descriptions, required qualifications, and company information, giving potential candidates a clearunderstanding of the roles they are applying for. Whether you are starting your career or looking for your next big opportunity, JobHub makes job hunting simple, efficient, and accessible.",
            technologies: ["Tailwind Css", "JavaScript", "React js", "Axios", "etc."],
            image: job,
            demoLink: "/*",
            repoLink: "https://github.com/AbdurRahman-202416/react-job-application",
        },
    ];

    return (
        <div>
            <Navbar />
            <h1 className='mx-auto text-center py-4 text-sm sm:text-2xl font-bold'> Recent Work</h1><hr />
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-3 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="max-auto bg-[#0A2640] text-white border-4 shadow-md shadow-gray-900 border-gray-700 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
                    >
                        <Link to={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <img
                                className="rounded-t-lg p-1 w-[99%] hover:w-[100%] mx-auto border h-auto sm:h-[300px] border-r-indigo-900 rounded-sm"
                                src={project.image}
                                alt={project.title}
                            />
                        </Link>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                                {project.title}
                            </h5>
                            <p className="mb-3 font-normal  dark:text-gray-400">
                                {project.description}
                            </p>
                            <p className="mb-3 font-medium  dark:text-gray-200">
                                <span className="font-bold">Technologies:</span> {project.technologies.join(", ")}
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    to={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 text-sm border-gray-200  text-center text-[#0A2640] font-semibold bg-[#00ff99] rounded-lg hover:bg-[#41b989] focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                                >
                                    Live Demo
                                </Link>
                                <Link
                                    to={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                >
                                    GitHub Repo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;

