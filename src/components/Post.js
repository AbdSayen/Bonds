const Post = ( {likes, comments, viewed}) => {
    return (
        <div className="post">
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