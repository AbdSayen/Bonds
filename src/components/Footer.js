import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="head">
                        <h3>You have questions? Ask!</h3>
                        <img src={require("./../assets/img/Logo2.png")} alt="" />
                    </div>
                    <div className="send">
                        <div className="inputs">
                            <input placeholder="name"></input>
                            <br />
                            <input type="email" placeholder="email"></input>
                            <div className="position-absolute">
                                <div className="d-flex">
                                    <input type="checkbox" />
                                    <p>Я согласен на обработку моих персональных данных</p>
                                </div>
                                <div className="d-flex">
                                    <input type="checkbox" />
                                    <p>Я согласен с политикой конфиденциальности</p>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <input placeholder="message"></input>
                            <div className="btn">Send</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;