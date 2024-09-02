import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Keban Et was founded in 1976 as Keban Kasap. Despite being a boutique butcher, it quickly earned the title of Meat Master due to the unimproved, additive-free and delicious meat it offered. In 41 years, the business volume, product range, customers, employees, in short, many things have changed. However, the only thing that has not changed is the meat and meat depth flavor offered by Keban Et. Keban Kasap is one of the rare meat options that can grow completely without spoiling with the demands from the devices. It expanded its production line by taking the loyalty and praise of the power in the following years.
                    <br />
                    <br />
                </p>
            </div>
        </div>
    )
}

export default About
