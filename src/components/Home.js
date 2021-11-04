import React, { useEffect, useRef } from "react";
import "./Home.css"
import { init } from 'ityped'

function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Welcome to my Portfolio!", "Video Editing", "Motion Graphics"]
        })
    }, []);

    return (
        <div className="intro-bg">
            <div className="intro">
                <div className="container">
                    <h1 className="home-h1">THANAWAT</h1>
                    <h1 className="home-h1">UDCHACHON</h1>
                    <h2 className="home-h2">-</h2>
                    <h3 className="home-h3"><span ref={textRef}></span></h3>
                </div>
                <div className="right">
                    <h2>Portfolio</h2>
                </div>
            </div>
        </div>
    )
}

export default Home