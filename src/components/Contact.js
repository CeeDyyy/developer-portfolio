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
                    <div className="container">
                    <h1 className="contact-h1">Contact Me</h1>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col-sm-5 contact-details-overlay">
                                <div className="container">
                                    <div className="contact-text"><i class="bi bi-telephone-fill"></i> 09-8891-9515</div>
                                    <div className="contact-text"><i class="bi bi-envelope-fill"></i> thanawat.udchachon@gmail.com</div>
                                    <div className="contact-text"><i class="bi bi-geo-alt-fill"></i> 79/355 Pudtan Village, Soi Petchkasem 81, Ma Charoen Road, Nong Khaem Sub-district, Nong Khaem District, Bangkok, 10160</div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="container">

                                    <form
                                        className="row"
                                        // style={{ margin: "25px 85px 75px 100px" }}
                                        onSubmit={sendEmail}
                                    >
                                        <input type="text" name="name" className="form-control" placeholder="Name" />

                                        <input type="email" name="user_email" className="form-control" placeholder="Email" />

                                        <textarea name="message" rows="4" className="form-control" placeholder="Message" />
                                        <input
                                            type="submit"
                                            value="Send"
                                            className="form-control btn btn-secondary"
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