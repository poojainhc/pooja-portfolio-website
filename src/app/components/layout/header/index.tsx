"use client";

import { useState } from "react";
import Logo from "../logo";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };
    return (
<header className="navbar w-full top-0 z-50 bg-white">            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>

                    
                        <button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                        >
                            <span className="relative z-10 text-xl font-small text-black group-hover:text-white transition-colors duration-300">
                                Download PDF Resume
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
