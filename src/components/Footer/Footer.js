import React, { createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {
    const ref = createRef();
    useEffect(
        () => {
            props.sendMarginBottom(ref.current.offsetHeight);
        }
    )
    return (
        <div className="footer" ref={ref}>

            <nav className="navLink">
                <Link exact="true" className="NavLink-item-footer" exact to="/">
                    דף הבית
				</Link>
                <Link exact="true" className="NavLink-item-footer" to="/catalog">
                    קטלוג
				</Link>
                <Link exact="true" className="NavLink-item-footer" to="/content">
                    יצירת קשר
				</Link>
                <Link exact="true" className="NavLink-item-footer" to="/about">
                    אודות
				</Link>
            </nav>
            <p className="footer-d"> design by Pini Shteren &copy;</p>
        </div>
    );
}
