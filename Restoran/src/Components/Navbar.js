import React from 'react'
import Logo from '../assets/hamburgerlogo.png';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='rightSide'>
            </div>
        </div>
    )
}

export default Navbar
