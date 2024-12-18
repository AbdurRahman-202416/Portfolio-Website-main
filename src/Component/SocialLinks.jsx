import '@fortawesome/fontawesome-free/css/all.min.css';


const SocialLinks = () => {
    return (
        <div>
            <div className="flex  gap-4">
                {[
                    { href: "https://github.com/AbdurRahman-202416?tab=repositories0", icon: "github" },
                    { href: "https://www.linkedin.com/in/abdur-rahman-8635b9290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", icon: "linkedin" },
                    { href: "https://www.facebook.com/shak.santo.7/", icon: "facebook" },
                    { href: "https://www.instagram.com/sajjad_hossen_santo?igsh=YzljYTk1ODg3Zg==", icon: "instagram" },
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
