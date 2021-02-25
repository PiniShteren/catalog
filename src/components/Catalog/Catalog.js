import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './catalog.css';

import Data from "../data/doors.json";

export default function Catalog(props) {
    var history = useHistory();
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
            {Data.catalog.map((e, i) => {
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
        </div >
    )
}
