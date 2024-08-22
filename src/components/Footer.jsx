import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container text-center md:text-start lg:text-start grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-16 md:gap-24 lg:gap-44'>
            <div>
                <b className='text-xl font-bold'>Gitpod</b>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Self-Hosted</a></li>
                    <li><a href="#">Gitpod vs GitHub</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>
            <div>
            <b className='text-xl font-bold'>Developer</b>
                <ul>
                    <li><a href="#">Getting started</a></li>
                    <li><a href="#">Screencasts</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Report a bug</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div>
                <b className='text-xl font-bold'>Company</b>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Media Kit</a></li>
                </ul>
            </div>
            <div>
                <b className='text-xl font-bold'>Legal</b>
                <ul>
                    <li><a href="#">Imprint</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer