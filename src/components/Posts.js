import Post from "./Post"

const Posts = () => {
    return (
        <>
            <Post likes={3} viewed={15} comments={1} userName={"No User Name"} subscribers={13}/>
            <Post likes={23432} viewed={157} comments={72} userName={"Abdurr"} subscribers={149}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
            <Post likes={3} viewed={15} comments={1}/>
        </>
    );
}

export default Posts;