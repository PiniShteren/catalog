import React, { useState, useEffect } from 'react';
import "./home.css";
import { useHistory } from 'react-router-dom';

import Door1 from "../images/door1.png";
import Door2 from "../images/door2.png";
import Door3 from "../images/door3.png";
import Door4 from "../images/door4.png";
const doors = [Door1, Door2, Door3, Door4];


export default function Home(props) {
    var history = useHistory();
    const [i, setI] = useState(0);
    const [count, setCount] = useState(0)

    const animation = () => {
        var div = document.getElementById("img-slide");
        div.classList.remove('show');
        div.classList.add('hide');
        setTimeout(
            () => {
                if (i === doors.length - 1) {
                    setI(0);
                } else {
                    setI(i + 1);
                }
            },
            501
        )
        setTimeout(
            () => {
                div.classList.remove("hide");
                div.classList.add('show');
            }, 1000
        )
    }

    useEffect(
        () => {
            const interval = setInterval(() => { animation() }, 5000);
            return () => clearInterval(interval);
        }
    )
    const openProduct = (index) => {
        let windowScroll = Math.floor(window.scrollY);
        window.scroll(0, 0);
        // props.sendIndex(index, windowScroll);
        history.push("/product")
    }
    return (
        <div className="home">
            <div>
                <div id="img-slide" style={{ backgroundImage: `url(${doors[i]})` }} />
            </div>
            <div className="exmple-products">
                {props.data.map((e) => {
                    let img = require(`../images/rav-barich/${e.IMAGE}.png`).default;
                    return (
                        <div className='product'
                            key={i}
                            onClick={() => {
                                openProduct(i);
                            }}>
                            <div className="hover"></div>
                            <div className="details">
                                <p id="details-text">{e.NAME}</p>
                            </div>
                            <div className="img-product" style={{ backgroundImage: `url(${img})` }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
