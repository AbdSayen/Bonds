import Chooseus from "./ChooseUs";
import Posts from "./Posts";

const Home = () => {
    return (
        <div className="home">
            <div className="title-home-page">
                <div className="container">
                    <p className="title">Chat with your friends from <br /> anywhere in the world.</p>
                    <p className="description">Bonds - will give you the opportunity to communicate anywhere <br />
                    in the world. Here you can share your brightest moments in life <br />
                    and get the support of all your friends.</p>
                    <div className="btn">Begin</div>
                    <img className="message" src={require("./../assets/img/message.png")} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home;