import React, { useEffect } from 'react';
import "./product.css";
import { useHistory } from 'react-router-dom';

export default function Product(props) {
    var img = require(`../images/rav-barich/${props.img}.png`).default;
    var history = useHistory();
    const back = () => {
        // console.log(props.scroll);
        // window.scroll(0, props.scroll)
        history.push("/catalog")
    }

    return (
        <div className="product-view">
            <button onClick={back}>Back</button>
            <h3>{props.name}</h3>
            <div className="img-product-view" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="details">
                <p id="descrip"><span id="head-des">תאור:</span> {props.description}</p>
                <ul>
                    <li><span id="head-des">מבנה הדלת:</span> {props.structure}</li>
                    <li><span id="head-des">תהליך הצביעה:</span> {props.coloring}</li>
                    <li><span id="head-des">מערכת נעילה:</span> {props.locking}</li>
                    <li><span id="head-des">סגנון - דלת:</span> {props.design}</li>
                </ul>
            </div>
        </div>
    )
}
