import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer-d"> design by Pini Shteren &copy;</p>
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
        </div>
    );
}
