import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="head">
                        <h3>You have questions? Ask!</h3>
                        <img src={require("./../../assets/img/Logo2.png")} alt="" />
                    </div>
                    <div className="send">
                        <div className="inputs">
                            <div id="name-email">
                                <input placeholder="name" />
                                <br />
                                <input type="email" placeholder="email" />
                            </div>

                        </div>
                        <div className="message-box">
                            <textarea placeholder="message"></textarea>
                        </div>
                    </div>
                    <div className="check-boxes">
                        <div className="d-block">
                            <div className="d-flex">
                                <input type="checkbox" />
                                <p>Я согласен на обработку моих персональных данных</p>
                            </div>
                            <div className="d-flex">
                                <input type="checkbox" />
                                <p>Я согласен с политикой конфиденциальности</p>
                            </div>
                        </div>
                        <div className="btn">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;