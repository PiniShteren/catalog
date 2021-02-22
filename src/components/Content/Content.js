import React from 'react';
import "./content.css";

import emailjs from 'emailjs-com';
import ReactWhatsapp from 'react-whatsapp'

import Phone from "../images/phone.svg";
import WhatsApp from "../images/whatsapp.svg";

export default function Contect() {
    function sendEmail(e) {
        debugger
        e.preventDefault();
        emailjs.sendForm('service_zlxxzw9', 'template_4l9e5or', e.target, 'user_aqT1uN67A9RZMPqrpktio')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.querySelector('form').reset();
    }
    return (
        <div className="content">
            <div className="top-content">
                <h2 id="content-h2">צור קשר</h2>
            </div>
            <div className="main-content">
                <div className="content-details">
                    <ReactWhatsapp className="whats" number="+972544936366" >
                        <div className="details-child">
                            972-054-493-6366+
                        <img src={WhatsApp} alt="img" width="19vh" />
                        </div>
                    </ReactWhatsapp>
                    <a id="link-phone" href="tel:0544936366">
                        <div className="details-child">
                            054-493-6366
                        <img src={Phone} width="15vh" />
                        </div>
                    </a>
                </div>
                <div className="from">

                    <form
                        onSubmit={sendEmail}
                    >
                        <input type="text" id="input" name="fullName" pattern="[a-zA-Zא-ת ]{3,33}" required placeholder="שם מלא..." />
                        <input type="email" id="input" name="email" pattern="[a-z0-9א-ת]{4,20}@[a-z]{5,10}.[a-z]{2,10}" required placeholder="אימייל..." />
                        <input type="text" id="input" name="subject" pattern="[a-zA-Zא-ת ]{5,10}" required placeholder="נושא..." />
                        <textarea rows="4" cols="50" type="text" id="input" name="message" pattern="[a-zA-Zא-ת ]{10,100}" placeholder="ההודעה שלך..." />
                        <input type="submit" placeholder="שלח" id="button-send" />
                    </form>
                </div>
            </div>
        </div>
    )
}
