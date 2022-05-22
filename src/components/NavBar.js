import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <div className="container">
                    <img className="logo" src={require("./../assets/img/logo.png")} alt="" />
                    <ul>
                        <li id="home">Home
                        {/* <div className="dop" /> */}
                        </li>
                        <li>Recommendations</li>
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
        </div>
    );
}

export default Navbar;