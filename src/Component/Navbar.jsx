

const Navbar = () => {
    return (
        <div>
            <div className="text-white shadow-2xl rounded-sm px-2 my-3 py-3 ">
                <div className="container mx-auto group flex justify-between items-center">
                    <a href="/">
                        <h1 className="text-4xl  flex justify-center items-center hover:text-[#00FF99] transition duration-500  font-bold">
                            Shanto
                            <span className="text-[#00FF99] group-hover:text-yellow-300 group-hover:shadow-lg rounded-full mx-6 h-[33px] group-hover:shadow-yellow-200 transition duration-500  text-6xl ">*</span>
                        </h1>
                    </a>
                    <div className="hidden xl:flex items-center gap-8">
                        <nav className="flex gap-8">
                            {["home", "services", "resume", "work", "contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`/${item}`}
                                    className="capitalize font-medium py-1 text-[22px] border border-[#0A2647] hover:border-[white] transition duration-500 rounded-sm px-3 hover:text-indigo-800 hover:bg-[#00FF99]"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                        <a href="/contact">
                            <button className="rounded-full  text-indigo-800 border-2 bg-[#00FF99] hover:bg-[#0A2647] hover:text-white hover:border-[#00FF99] text-[22px] text-primary px-4 h-[44px] hover:bg-accent-hover transition duration-500">
                                Hire me
                            </button>
                        </a>
                    </div>
                    <div className="xl:hidden">
                        <button aria-label="Open menu" className="text-accent text-2xl">
                            &#9776;
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
