import React from 'react'
import Container from './Container'
import Footer from './Footer'

export default function Navbar() {
  return (
    <div className='main'>
        <div className='nav-main-div'>
            <img src='https://www.freepnglogos.com/uploads/tesla-logo-png-20.png' alt='tesla-logo' className='nav-image'/>
            <div className='nav-items'>
                <a  href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
                <a href='#'>SolarRoof</a>
                <a href='#'>Solar Panels</a>
                <a href='#'>Powerwall</a>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a href='#'>Menu</a>
            </div>
        </div>
        <Container
            url="https://cdn.motor1.com/images/mgl/7ZPKGV/s3/tesla-model-3.jpg"
            title="Model 3"
            price="Starting at $32,740"
            tax="After Fedaral Tax Credit"
            button_one="Order Now"
            button_two="Demo Drive"
        />
        <Container
            url="https://electrek.co/wp-content/uploads/sites/3/2021/07/Model-Y-Hero-2021.jpg?quality=82&strip=all&w=1024"
            title="Model Y"
            price="Starting at $39,990"
            tax="After Fedaral Tax Credit"
            button_one="Order Now"
            button_two="Demo Drive"
        />
        <Container
            url="https://images.hgmsites.net/hug/2020-tesla-model-s_100736241_h.jpg"
            title="Model S"
            price="View Inventory"
            button_one="Order Now"
            button_two="Demo Drive"
        />
        <Container
            url="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/Tesla-Model-X-front-action.jpg&c=0"
            title="Model X"
            price="View Inventory"
            button_one="Order Now"
            button_two="Demo Drive"
        />
        <Container
            url="https://www.pv-magazine.com/wp-content/uploads/2020/06/Screenshot-2020-06-19-19.45.17.png"
            title="Solar Panels"
            price="Schedule a Virtual Construction"
            button_one="Order Now"
            button_two="Learn More"
        />
        <Container
            url="https://media.wired.com/photos/5db373b7dea30b00096c6bbe/16:9/w_2400,h_1350,c_limit/Transpo-Tesla_solar_roof.jpg"
            title="Solar Roof"
            price="Produce Clean Energy from your roof"
            button_one="Order Now"
            button_two="Learn More"
        />
        <Container
            url="https://cdn.jdpower.com/JDP_Tesla%20Model%20S%20Home%20Charging.jpg"
            title="Accesories"
            button_one="Shop Now"
        />
        <Footer />
    </div>
    
  )
}
