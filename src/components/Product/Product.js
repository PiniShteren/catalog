import React, { useEffect } from 'react';
import "./product.css";
import { useHistory } from 'react-router-dom';

export default function Product(props) {
    var img = require(`../images/rav-barich/${props.img}.png`).default;
    var history = useHistory();
    const back = () => {
        history.push("/catalog")
    }

    return (
        <div className="product-view">
            <button onClick={back}>Back</button>
            <h3 id="product-view-name">{props.name}</h3>
            <div className="img-product-view" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="details">
                <p id="descrip">{props.description}</p>
                <ul>
                    <h3 style={{ textAlign: "center" }}>מפרט</h3>
                    <li><span id="head-des">מבנה הדלת:</span> {props.structure}</li>
                    <li><span id="head-des">תהליך הצביעה:</span> {props.coloring}</li>
                    <li><span id="head-des">מערכת נעילה:</span> {props.locking}</li>
                    <li><span id="head-des">סגנון - דלת:</span> {props.design}</li>
                </ul>
            </div>
        </div>
    )
}
