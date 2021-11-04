import React from 'react'
import "./CareerObj.css"
import SET from '../Set'

function CareerObj() {
    return (
        <div className="careerobj-bg">
            <div className="careerobj-overlay">
                <div className="container">
                    <div className="careerobj-con">
                        <div className="careerobj-text">
                            <h1>CAREER OBJECTIVE</h1>
                            <br />
                            <p>
                            {SET.careerObj}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerObj