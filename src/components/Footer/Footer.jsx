import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./purelogo.png" alt="" width={120} />

                <span className="secondaryText">Incubated out of i-TIC IIT Hyderabad, <br/>PURE EV is committed to drive the future of e-mobility</span>
            </div>
            <div className='flexColStart f-right'>
                <span className='footerText'>Pure Arena</span>
                <span className='secondaryText'>B4 DB mall,<br/>MP Nagar,Bhopal 205784</span>

                <div className='flexCenter f-menu'>
                    <span>Home</span>
                    <span>E-cycles</span>
                    <span>i-smart</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
        <div className='copyright'>Copyright © 2023 PURE EV. All Rights Reserved by Vihan.</div>
    </section>
  )
}

export default Footer
