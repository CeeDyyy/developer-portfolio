import React from 'react'
import "./AboutMe.css"
import SET from '../Set'

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="container col-10 col-lg-8 col-xxl-6">
                <div className="mt-5 mb-4">
                    <img src={SET.pic} alt="" />
                    <h1 className="text-center">Thanawat Udchachon</h1>
                    <h4 className="text-center">{SET.subtitle}</h4>
                </div>
                <hr />
                
                <div className="mt-5 mb-5">
                    <h3>ABOUT ME</h3>
                    <p>
                        {SET.aboutMe}
                    </p>
                </div>
            </div>
            <div className="scroll-down">
                <a className="btn" href="#Portfolio">
                    <h2>Portfolio</h2>
                    <h1><i className="bi bi-chevron-compact-down"></i></h1>
                </a>
            </div>
        </div>
    )
}

export default AboutMe