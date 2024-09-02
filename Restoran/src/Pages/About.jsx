import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Keban Et 1976 yılında Keban Kasap olarak kuruldu. Butik bir kasap olmasına rağmen müşterilerine sunmuş olduğu ürünlerin katkısız ve lezzetli olmasından dolayı kısa sürede Et Ustası ünvanının aldı. 41 yıldır iş hacmi, ürün yelpazesi, müşteriler, çalışanlar kısacası bir çok şey değişti. Ancak değişmeyen tek şey Keban Et in sunduğu et ve et ürünlerinin lezzeti idi.
                    Keban Kasap müşterilerinden aldığı talepler ile kalitesini hiç bozmadan büyüyebilen nadir et üreticilerindendir. İlerleyen yıllarda gücünü müşterilerinin sadakat ve övgülerinden alarak üretim bandını genişletti.
                </p>
            </div>
        </div>
    )
}

export default About
