import { GrLike } from "react-icons/gr";
import { useState } from "react";
import "../styles/Post.css";
function Post(props) {
    const postContent = props.content;

    const [likes, setLikes] = useState(postContent.likes);

    const handleLikes = (event) => {
        console.log(event);
        setLikes(likes + 1);
    };

    return (
        <div className="Post">
            <h2 className="TitrePost">{postContent.nom}</h2>
            {/* 
                <p className="d-flex justify-content-center">
                    to test to align content
                    using Bootstrap c
                </p>
             */}
            <p className="PostContent">{postContent.contenu}</p>
            <div>
                <div>
                    <h3 id="LikeData">{likes}</h3>
                    <GrLike size="30" id="LikeButtonon" onClick={handleLikes}></GrLike>
                </div>
                <div>
                    <h3>{postContent.comments}</h3>
                </div>
            </div>
        </div>
    );
}

export default Post;
