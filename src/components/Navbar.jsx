import React, { useState } from 'react'
import { logo } from '../assets/data'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
        console.log(open);
    }
    return (
        <header className='overflow-x-hidden'>
            <div className="container mx-auto max-w-1140 px-5 flex justify-between items-center py-8">
                <div className='flex items-center space-x-2 font-bold'>
                    <img src={logo} alt="logotip" />
                    <p className='text-xl'>Gitpod</p>
                </div>

                <nav className='hidden md:inline-block'>
                    <ul className='flex space-x-5 text-gray'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">We're hiring</a></li>
                    </ul>
                </nav>
                <button className="Login hidden md:inline-block">Login</button>
                
                <button aria-label='menu toggle' onClick={toggleMenu} className="lg:hidden flex flex-col justify-center items-center z-50 p-0">
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                    </span>

                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`} >
                    </span>

                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                    </span>
                </button>
            </div>
            <div className={`container py-10 transition duration-200 text-black  ${open ? 'translate-x-0' : '-translate-x-full '}`}>
                <nav className=''>
                    <ul className='flex flex-col space-y-5 text-center'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">We're hiring</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar