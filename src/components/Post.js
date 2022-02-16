import { GrLike } from "react-icons/gr";
import { useState } from "react";

// import { Button } from "antd";

function Post(props) {
    const postContent = props.content;

    const [likes, setLikes] = useState(postContent.likes);

    const handleLikes = (event) => {
        console.log(event);
        setLikes(likes + 1);
    };

    return (
        <div className="Post">
            <h2>{postContent.nom}</h2>
            <p>{postContent.contenu}</p>
            <div>
                <div>
                    <h3>{likes}</h3>
                    <GrLike onClick={handleLikes}></GrLike>
                </div>
                <div>
                    <h3>{postContent.comments}</h3>
                </div>
            </div>
        </div>
    );
}

export default Post;
