import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className="card text-center">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-overlay">
                <button className="hover-btn">View More</button>
            </div>
        </div>
    )
}

export default Card