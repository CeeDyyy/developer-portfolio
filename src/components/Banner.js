import React from "react";
import "./Banner.css"

let bannerData = {
    title: "Welcome to my Portfolio",
    desc: "My name is Thanawat Udchachon"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="overlay">
                <div className="container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <h1>{bannerData.title}</h1>
                            <p>
                                {bannerData.desc}
                            </p>
                            <a href="#AboutMe" className="banner-btn">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner