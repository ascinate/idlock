import React, { useState } from 'react'

//Image
import logo from "/pays-logo.png"
import { AlignJustify } from 'lucide-react'

function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <header>
                <nav className=' shadow-sm'>
                    <div className='wrapper'>
                        <div className='navBar flex items-center justify-between'>
                            <h2 className='navLogo'>IDLock</h2>

                          
                                <ul  className='navLink  flex items-center justify-between'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Pages</li>
                                    <li>Pricing</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                                <div className='m-nav-btn-hide'>
                                    <button className='signup'>Sign up</button>
                                    <button className='secondary-theme-btn'>Sign up</button>
                                    {/* <AlignJustify className='m-theebar' onClick={handleNavMenu} /> */}
                                </div>
                           



                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar