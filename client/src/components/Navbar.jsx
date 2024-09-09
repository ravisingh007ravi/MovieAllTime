import React, { useState } from 'react'
import logo from '../Images/favicon.png'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleChange = () => {
        setMenu(!menu)
    }

    return (
        <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>

            <nav className='flex justify-between items-center text-black py-6 px-8 md:px-32 h-[70px]  bg-white drop-shadow-md'>

                <a href="#/">
                    <img className='w-[50px] hover:scale-105 transition-all cursor-pointer' src={logo} alt="logo" />
                </a>

                <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
                    <li><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Hollywood</a></li>
                    <li><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Bollywood</a></li>
                    <li><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">South</a></li>
                    <li><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Anime</a></li>
                </ul>
                <div className='relative hidden md:flex items-center justify-center gap-3'>
                    <i class="fa-solid fa-magnifying-glass absolute left-3 text-2xl text-gray-500" />
                    <input className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500' type="text" placeholder='Search...' />
                </div>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    {
                        menu ? (<i class="fa-solid fa-xmark block text-5xl cursor-pointer xl:hidden"
                            onClick={handleChange} />) :
                            (<i class="fa-solid fa-bars block text-5xl cursor-pointer xl:hidden"
                                onClick={handleChange} />)
                    }
                </div>

                <div className={`absolute xl:hidden top-[70px] left-0 w-full bg-white flex flex-col items-center gap-6 pb-5 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{ transform: "transform 0.3s ease, opacity 0.3s ease" }}
                >

                    <div><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Hollywood</a></div>
                    <div><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Bollywood</a></div>
                    <div><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">South</a></div>
                    <div><a className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' href="#/">Anime</a></div>

                </div>


            </nav>
        </div>
    )
}

export default Navbar
