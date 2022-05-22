import React from 'react';

const Info = () => {
    return (
        <div className="info-section">
            <div className="info-card green">
                <div className="container">
                    <img src={require("./../assets/img/defense.png")} alt="" />
                    <div>
                        <h3>Everything is safe</h3>
                        <p>Do not worry about your personal data and privacy,<br />everything will be in special security to which no one<br />will have access except you</p>
                    </div>
                </div>
            </div>
            <div className="info-card">
                <div className="container">
                    <div>
                        <h3>Communication with<br />the administration</h3>
                        <p>You can contact the administration at any time of the day.<br />You can ask any question which will be answered in the<br />near future by the administration</p>
                    </div>
                    <img src={require("./../assets/img/task.png")} alt=""/>
                </div>
            </div>
            <div className="info-card green">
                <div className="container">
                    <img src={require("./../assets/img/24-hours.png")} alt=""/>
                    <div>
                        <h3>Full Activity</h3>
                        <p>Our servers will be active 24 hours a day,<br/>7 days a week. Thanks to which<br/>you can use our service anytime and anywhere</p>
                    </div>
                </div>
            </div>
            <div className="info-card">
                <div className="container">
                    <div>
                        <h3>Recommendations for you</h3>
                        <p>Special recommendations will be customized according<br/>to your interests and tastes so that you can spend<br/>your time there with pleasure</p>
                    </div>
                    <img src={require("./../assets/img/group.png")} alt=""/>
                </div>
            </div>

            <div className="btn-section">
                <h2>Start using right now</h2>
                <div className="btn">Begin</div>
            </div>
        </div>
    );
}

export default Info;