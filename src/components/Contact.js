import React from 'react'
import "./Contact.css"
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_ek3r4qw",
            "template_7u9sthc",
            e.target,
            "user_9UNJOmOylf1aAoYRf2xri"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="contact">
            <div className="contact-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140"><path fill="#fff" fill-opacity="1" d="M0,96L720,128L1440,96L1440,0L720,0L0,0Z"></path></svg>
                <div className="container">
                    <h1 className="text-center my-3 text-white">CONTACT</h1>
                    <hr />
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
                        <div className="col-sm-5">
                            <div className="container">
                                <div className="contact-text"><i className="bi bi-telephone-fill icon-color"></i> 09-8891-9515</div>
                                <div className="contact-text"><i className="bi bi-envelope-fill icon-color"></i> thanawat.udchachon@gmail.com</div>
                                <div className="contact-text"><i className="bi bi-geo-alt-fill icon-color"></i> 79/355 Pudtan Village, Soi Petchkasem 81, Ma Charoen Road, Nong Khaem Sub-district, Nong Khaem District, Bangkok, 10160</div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="container">

                                <form
                                    // style={{ margin: "25px 85px 75px 100px" }}
                                    onSubmit={sendEmail}
                                >
                                    <input type="text" name="name" className="form-control" placeholder="Name" />

                                    <input type="email" name="user_email" className="form-control" placeholder="Email" />

                                    <textarea name="message" rows="4" className="form-control" placeholder="Message" />
                                    <input
                                        type="submit"
                                        value="Send"
                                        className="form-control btn"
                                        style={{ marginTop: "30px" }}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact