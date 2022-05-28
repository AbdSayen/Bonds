import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Navbar = () => {
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    });

    const listenScrollEvent = () => {
        if (window.scrollY > 170) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    return (
            <nav  className={changeColor ? "scrolled" : ""}>
                <div className="container">
                    <img className="logo" src={require("./../../assets/img/logo.png")} alt="" />
                    <ul>
                        <li id="home">Home</li>
                        <Link to="/recommendation">
                            <li>Recommendations</li>
                        </Link>
                        <a href="https://www.donationalerts.com/r/bondschat"><li>Donate</li></a>
                        <li>Contact</li>
                    </ul>
                    <div className="phone">
                        <div className="number"><i className="fa-solid fa-phone" />+994 55 359-35-02</div>
                    </div>
                    <div className="profile">
                        <div className="circle">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <h3>Profile</h3>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;