'use client'
import React, { useState } from 'react'
import { useHideCursor } from '../context/GlobalCursor';

function Navbar() {
    const { hideCursor, setHideCursor } = useHideCursor();

    const textEnter = () => {
        setHideCursor(true); // Hide the cursor
    };

    const textLeave = () => {
        setHideCursor(false); // Show the cursor
    };
    return (
        <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
            <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
                <span className="mr-2 w-8">
                    <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
                </span>
                Hemant
            </a>
            <input type="checkbox" className="peer hidden" id="navbar-open" />
            <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
            <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Components</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Pricing</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Contact</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">FAQ</a></li>
                    <li className="relative inline-block group cursor-pointer hover-text" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        {/* Text */}
                        <span className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                            Hover over me
                        </span>

                        {/* SVG Underline */}
                        <svg
                            className="absolute bottom-0 left-0 w-full h-1 stroke-orange-500"
                            viewBox="0 0 101 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48C24.296 3.026 24.844 4.627 27.5 7C30.575 9.748 34.142 2.859 37.566 2.312C45.083 1.112 50.803 7.737 55.156 5.057C58.5 3 60.464-1.786 66 2C67.996 3.365 69.174 5.737 71.286 6.41C76.709 8.137 96.626-1.571 100.426 5.116"
                                pathLength="100"
                            />
                        </svg>
                    </li>
                </ul>
                <hr className="mt-4 w-full lg:hidden" />
                <button className="relative overflow-hidden rounded-full bg-[#3498db] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:rounded-full before:bg-[#2ecc71] before:transition-all before:duration-300 ease-in-out hover:before:left-0 my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                    <span className="relative z-10 text-white font-bold">
                        Hover Me
                    </span>
                </button>
            </nav>
        </header>

    )
}

export default Navbar