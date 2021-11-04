import React, { useState } from "react";
import "./Modal.css"
import Card from './Card'

function Modal(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <Card
                    img={props.img}
                    title={props.title}
                    description={props.description}
                />
            </button>

            {modal && (
                <div className="modal-modal">
                    <div onClick={toggleModal} className="modal-overlay"></div>
                    <div className="modal-content center">
                        <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <h2>{props.title}</h2>
                        <div class="modal-body">
                            <p>{props.description}</p>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            x
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal