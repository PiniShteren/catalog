import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './catalog.css';

import Data from "../data/doors.json";

export default function Catalog(props) {
    var p;
    var history = useHistory();
    const [opacity, setOpacity] = useState(1);
    const [data, setData] = useState(Data.catalog);
    const openProduct = (index) => {
        let windowScroll = Math.floor(window.scrollY);
        window.scroll(0, 0);
        props.sendIndex(index, windowScroll);
        history.push("/product")
    }
    useEffect(
        () => {
            window.scroll(0, props.scroll)
        }
    )
    return (
        <div className="catalog">
            {data.map((e, i) => {
                p = <p id={`quick-view${i}`} style={{ position: 'absolute', top: "50%", opacity: "1", display: 'none' }}>צפיה מהירה</p>;
                let img = require(`../images/rav-barich/${e.IMAGE}.png`).default;
                return (
                    <div className='product' id={`product${i}`}
                        key={i}
                        onMouseMove={() => {
                            let prod = document.getElementById(`product${i}`);
                            prod.style.opacity = "0.4";
                            document.getElementById(`quick-view${i}`).style.display = "inline"

                        }}
                        onMouseOut={() => {
                            let prod = document.getElementById(`product${i}`);
                            prod.style.opacity = "1";
                            document.getElementById(`quick-view${i}`).style.display = "none"
                        }}
                        onClick={() => {
                            openProduct(i);
                        }}>
                        <div className="details">
                            <p id="details-text">{e.NAME}</p>
                        </div>
                        {p}
                        <div className="img-product" style={{ backgroundImage: `url(${img})` }} />
                    </div>
                )
            })}
        </div >
    )
}
