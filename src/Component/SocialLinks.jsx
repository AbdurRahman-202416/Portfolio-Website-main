import '@fortawesome/fontawesome-free/css/all.min.css';


const SocialLinks = () => {
    return (
        <div>
            <div className="flex  gap-4">
                {[
                    { href: "https://github.com/", icon: "github" },
                    { href: "https://www.linkedin.com/in/", icon: "linkedin" },
                    { href: "https://www.facebook.com/", icon: "facebook" },
                    { href: "https://www.instagram.com/", icon: "instagram" },
                ].map((link) => (
                    <a
                        key={link.icon}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 hover:border-white transition duration-600 border-2 border-[#00FF99]  rounded-full flex items-center justify-center hover:bg-[#00FF99] "
                    >
                        <i className={`fab fa-${link.icon}`} />
                    </a>
                ))}
            </div>

        </div>
    )
}

export default SocialLinks
