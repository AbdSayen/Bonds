const Post = ( {likes, comments, viewed, userName, subscribers}) => {
    return (
        <div className="post">
            <div className="user">
                <div className="img">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <h3 className="username">{userName}</h3>
                <h3 className="subscribers">Subs: {subscribers}</h3>
            </div>
            <div className="media"></div>
            <div className="stats">
                <ul>
                    <li>{likes} Likes</li>
                    <li>{comments} Comments</li>
                    <li>{viewed} Viewed</li>
                </ul>
            </div>
            <div className="comments">
                <input type="text"/>
            </div>
        </div>
    );
}

export default Post;