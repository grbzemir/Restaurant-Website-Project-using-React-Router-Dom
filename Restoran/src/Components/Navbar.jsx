import React from 'react'
import Logo from '../assets/hamburgerlogo.png';
import { Link } from 'react-router-dom';


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
