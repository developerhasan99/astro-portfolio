import { useState } from "react";

const Nav = ({ children }: { children: React.ReactNode }) => {

    const [mobileNav, setMobileNav] = useState(false);

    const handleClick = () => {
        setMobileNav(!mobileNav);
    }

    return (
        <>
            <button onClick={handleClick} className="relative h-5 w-6 flex justify-end items-center gap-[6px] md:hidden">
                <div className={`absolute top-0 right-0 origin-top-right w-7 h-[2px] bg-white transition-transform duration-200 ${mobileNav ? '-rotate-[40deg]' : 'rotate-0'}`}></div>
                <div className={`h-[2px] bg-white transition-all duration-200 ${mobileNav ? 'w-0' : 'w-full'}`}></div>
                <div className={`absolute bottom-0 right-0 origin-bottom-right w-7 h-[2px] bg-white transition-transform duration-200 ${mobileNav ? 'rotate-[40deg]' : 'rotate-0'}`}></div>
            </button>
            <nav role="navigation" className="hidden md:flex gap-12 items-center">
                <a href="/#about" className="text-white hover:text-blue transition-colors">About</a>
                <a href="/#experience" className="text-white hover:text-blue transition-colors">Experience</a>
                <a href="/project" className="text-white hover:text-blue transition-colors">Work</a>
                <a href="/blog" className="text-white hover:text-blue transition-colors">Blog</a>
                {children}
            </nav>
        </>
    );
};

export default Nav;