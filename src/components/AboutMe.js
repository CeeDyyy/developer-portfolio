import React from 'react'
import "./AboutMe.css"
import SET from '../Set'

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="container">
                <div className="container">
                    <div className="mt-5 mb-4">
                        <img src="https://cdn.discordapp.com/attachments/630762801878532116/897067922059567104/DSC3441.png" alt="" />
                        <h1>Thanawat Udchachon</h1>
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
        </div>
    )
}

export default AboutMe