import React from 'react';

const Chooseus = () => {
    return (
        <div className="chooseUs">
            <div className="container">
                <h1>Why should you choose us?</h1>
                <div className="cards">
                    <div className="card">
                        <img src={require("./../assets/img/task.png")} alt=""/>
                        <h3>Relations</h3>
                        <p>You can have a conversation<br/>with your friends at any time</p>
                    </div>
                    <div className="card">
                        <img src={require("./../assets/img/accident.png")} alt=""/>
                        <h3>Emergency</h3>
                        <p>You can have a conversation<br/>with your friends at any time</p>
                    </div>
                    <div className="card">
                        <img src={require("./../assets/img/funny.png")} alt=""/>
                        <h3>Fun</h3>
                        <p>You can have a conversation<br/>with your friends at any time</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chooseus;