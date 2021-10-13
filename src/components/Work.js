import React from 'react'
import "./Work.css"
import WorkData from '../data/works.json'
import SET from '../Set'

// const oldest = Object.keys(WorkData).slice(0,5)
// const newest = Object.keys(WorkData).reverse()
const items = SET.sequence
function Work() {
    return (
        <div className="work">
            {items.map(key =>
                key % 2 === 0 ? (
                    <div className="work-odd-overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110"><path fill="#fff" fill-opacity="1" d="M0,32L1440,64L1440,0L0,0Z"></path></svg>
                        <section className="container-md" id={key}>
                            <div className="row">
                                <div className="col-12 col-md-7 proj-img d-flex justify-content-center align-items-center order-md-last my-4">
                                    <img src={WorkData[key].image[0]} alt={WorkData[key].image[1]} />
                                </div>
                                <div className="col-12 col-md-5 d-flex align-items-center text-center text-md-start order-md-first">
                                    <div className="col">
                                        <div className="row">
                                            <h3>{WorkData[key].title}</h3>
                                        </div>
                                        <div className="row">
                                            <h5>{WorkData[key].date}</h5>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <p>{WorkData[key].firstdescription}</p>
                                        </div>
                                        <div className="row">
                                            <p>{WorkData[key].seconddescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="container row mt-3">
                            {WorkData[key].tag.map(tag => (
                                <div className="col sm-icon d-flex align-items-center justify-content-center mb-4">
                                    <img src={tag} alt="" />
                                </div>
                            ))}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80"><path fill="#fff" fill-opacity="1" d="M0,32L1440,0L1440,320L0,320Z"></path></svg>
                    </div>
                ) : (
                    <div>
                        <section className="container-md" id={key}>
                            <div className="row">
                                <div className="col-12 col-md-7 proj-img d-flex justify-content-center align-items-center my-4">
                                    {parseInt(key) === 3 ? (
                                        <iframe width="560" height="315" src={WorkData[key].image[0]} title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    ) : (
                                        <img src={WorkData[key].image[0]} alt={WorkData[key].image[1]} />
                                    )}
                                </div>
                                <div className="col-12 col-md-5 d-flex align-items-center text-center text-md-start">
                                    <div className="col">
                                        <div className="row">
                                            <h3>{WorkData[key].title}</h3>
                                        </div>
                                        <div className="row">
                                            <h5>{WorkData[key].date}</h5>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <p>{WorkData[key].firstdescription}</p>
                                        </div>
                                        <div className="row">
                                            <p>{WorkData[key].seconddescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="container row mt-3">
                            {WorkData[key].tag.map(tag => (
                                <div className="col sm-icon d-flex align-items-center justify-content-center">
                                    <img src={tag} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Work