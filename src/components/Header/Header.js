import React, { useState, useEffect, createRef } from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';

import Face from "../images/facebook.svg";
import Menu from "../images/menu.svg";
import Phone from "../images/phone.svg";
import WhatsApp from "../images/whatsapp.svg";


export default function Header(props) {
    const [diplay, setDisplay] = useState('none')
    const [flag, setFlag] = useState(false);
    const ref = createRef();
    const [top, setTop] = useState(0)
    useEffect(
        () => {
            setTop(ref.current.offsetHeight);
            props.sendMarginTop(top);
        }
    )

    const openMenue = (menu) => {
        if (menu) {
            // debugger
            if (flag) {
                setDisplay("none");
                setFlag(false);
            } else {
                setDisplay('block');
                setFlag(true);
            }
        } else {
            if (flag) {
                setDisplay("none");
                setFlag(false);
            }
        }

    }
    return (
        <div ref={ref} className="header" id="header" onClick={() => {
            openMenue(false)
        }} >  <div className="top">
                <div className="logo">
                    <h1>פיני</h1>
                    <h3>דלתות & מנעולים</h3>
                </div>
            </div>
            <nav className="nav">
                <NavLink className="NavLink-item" activeStyle={{ boxShadow: "3px 3px 5px grey", borderRadius: "3vh", fontWeight: "400" }} exact to="/">דף הבית</NavLink>
                <NavLink className="NavLink-item" activeStyle={{ boxShadow: "3px 3px 5px grey", borderRadius: "3vh", fontWeight: "400" }} to="/catalog">   קטלוג</NavLink>
                <NavLink className="NavLink-item" activeStyle={{ boxShadow: "3px 3px 5px grey", borderRadius: "3vh", fontWeight: "400" }} to="/content">יצירת קשר</NavLink>
                <NavLink className="NavLink-item" activeStyle={{ boxShadow: "3px 3px 5px grey", borderRadius: "3vh", fontWeight: "400" }} to="/about">אודות</NavLink>
            </nav>
            <div className="facebook">

            </div>
            <div className="menu">
                <a id="face-link" href="https://www.facebook.com/pini859"><img id="img-face" src={Face} width="25vh" /></a>
                <img id="menu" src={Menu} alt="menu" onClick={openMenue} />
            </div>
            <div className="div-menu" style={{ display: diplay, top: `${top - 1}px` }}>
                <div className="nav-menu">
                    <NavLink className="NavLink-item-menu" onClick={openMenue} activeStyle={{ backgroundColor: "white", color: "black" }} exact to="/">דף הבית</NavLink>
                    <NavLink className="NavLink-item-menu" onClick={openMenue} activeStyle={{ backgroundColor: "white", color: "black" }} to="/catalog" > קטלוג</NavLink>
                    <NavLink className="NavLink-item-menu" onClick={openMenue} activeStyle={{ backgroundColor: "white", color: "black" }} to="/content">יצירת קשר</NavLink>
                    <NavLink className="NavLink-item-menu" onClick={openMenue} activeStyle={{ backgroundColor: "white", color: "black" }} to="/about">אודות</NavLink>
                </div>
                <div className='icons-menu'>
                    <ReactWhatsapp className="whatsapp-send" number="+972544936366">
                        <img src={WhatsApp} width="30vh" />
                    </ReactWhatsapp>
                    <a className="phone-link" href="tel:0544936366">
                        <img src={Phone} width="30vh" />
                    </a>
                </div>

            </div>
        </div>
    )
}