import React from 'react'
import "./Hero.css"
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container">

            <div className="flexColStart hero-left">
                <div className=" hero-title">
                    <motion.h1 initial={{x:"2rem", opacity: 0}} 
                    animate={{x:0, opacity: 1}} 
                    transition ={{
                        duration:4,
                        type:"spring"}}>
                        Road Bike <br/>
                        Electric.
                    </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                   <span className="secondaryText">The all new E-Bicycles with unparalled aerodynamics,<br/>unmatched ride quality.</span> 
                   
                </div>
                <div className="order-bar">
                    <button className="button">Order Now</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={860} end={1800} duration={2} />
                        <span>+</span>
                        </span>
                        
                        <span className="secondaryText">Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={500} end={1500} duration={2} />
                        <span>+</span>
                        </span>
                        
                        <span className="secondaryText">Total Sell</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={15} end={29} duration={5} />
                        <span>+</span>
                        </span>
                        
                        <span className="secondaryText">Service Centers</span>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x:0, opacity:1}}
                transition={{duration:3, type:"spring"}} 
                className="image-container">
                    <img src="./elecbic.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
