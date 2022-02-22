import { GrLike, GrContact, GrClose, GrAdd } from "react-icons/gr";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import "../styles/Post.css";
import PostComment from "./PostComment";
import { FaRegComments, FaTimes, FaCheckCircle } from "react-icons/fa";

function Post(props) {
    const [userAuthToken, setUserAuthToken] = useState(localStorage.getItem("@token", null));

    const [postContent, updatePost] = useState(props.content);

    const [comments, setComments] = useState(postContent.comments);
    const [nbLikes, setLikes] = useState(postContent.likes);

    /* Récupération des posts */
    const addLike = async () => {
        // Requête POST vers http://localhost:3002/posts/like et on attends la réponse
        const response = await fetch("http://localhost:3002/posts/like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: postContent._id }),
        });

        // Lecture du "flux" du corps de la réponse (on attends que la lecture soit complète)
        const data = await response.json();

        // Assignation des données à la variable d'état "nbLikes"
        // en fonction de la valeur renvoyé par le back end
        setLikes(data.likeCount);
    };

    const [displayFormToAddComment, setDisplayFormToAddComment] = useState(false);
    const toggleDisplayForm = (event) => {
        // changement de l'affichage du formulaire
        setDisplayFormToAddComment(!displayFormToAddComment);
    };

    // le commentaire est il pret à etre envoyé
    const [formIsValid, setFormIsValid] = useState(false);
    // le commentaire est il en court d'envoy
    const [formIsPending, setFormIsPending] = useState(false);

    // nbr de char min du commentaire
    const commenMinSize = 3;

    const onCommentToSendChange = (event) => {
        // check if value is good to send
        if (event.target.value.trim().length > commenMinSize) {
            // le commentaire est assez long
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }

        // save value
        setCommentToSend(event.target.value);
    };

    /**
     * Le texte du commentaire à ajouter
     */
    const [commentToSend, setCommentToSend] = useState("");

    /**
     * Demande d'envoy du commentaire
     */
    const sendComment = async (event) => {
        event.preventDefault();
        if (!formIsValid || formIsPending) {
            return false;
        }
        setFormIsPending(true);

        const authToken = localStorage.getItem("@token");

        // Requête POST et on attends la réponse
        const response = await fetch("http://localhost:3002/posts/comment", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Autorization: "bearer " + authToken,
            },
            body: JSON.stringify({
                id: postContent._id, // Id du post à commenter
                comment: commentToSend, // le jolie commentaire
            }),
        });
        // Lecture du "flux" du corps de la réponse (on attends que la lecture soit complète)
        const data = await response.json();

        // Assignation des données à la variable d'état "postContent
        // en fonction de la valeur renvoyé par le back end
        // updatePost(data.post);
        // maj des commentaires
        setComments(data.post.comments);

        // vidage du champs pour le prochain commentaire
        setCommentToSend("");
        // le champs devra donc de nouveau etre valider
        setFormIsValid(false);

        // fermeture du formulaire
        setDisplayFormToAddComment(false);
        // on a donc finit notre envoi
        setFormIsPending(false);

        return false;
    };

    const iconSize = 20;

    return (
        <div className="Post">
            <h2 className="TitrePost">{postContent.nom}</h2>
            <p className="PostContent">{postContent.contenu}</p>
            <div>
                <div id="LikeBorder" onClick={addLike}>
                    <Badge id="LikeCount" bg="secondary">
                        {nbLikes}
                    </Badge>
                    <GrLike size="20" id="LikeButtonon"></GrLike>
                </div>
                <div className="post-comment-add">
                    <FaRegComments
                        size={iconSize * 2}
                        className={displayFormToAddComment ? "visually-hidden" : "visually-display"}
                        onClick={toggleDisplayForm}
                    >
                        <GrContact></GrContact>
                    </FaRegComments>
                    <div className={displayFormToAddComment ? "visually-display" : "visually-hidden"}>
                        {!userAuthToken ? (
                            <span>
                                Vous devez etre connecté pour ajouter un commentaire
                                <FaTimes size={iconSize} onClick={toggleDisplayForm} className="cancel"></FaTimes>
                            </span>
                        ) : (
                            <form className="add-comment" onSubmit={sendComment}>
                                <input name="new-comment" value={commentToSend} onChange={onCommentToSendChange} />
                                &nbsp;
                                <FaCheckCircle
                                    size={iconSize}
                                    onClick={sendComment}
                                    className={formIsValid && !formIsPending ? "add" : "disable"}
                                ></FaCheckCircle>
                                &nbsp;
                                <FaTimes
                                    size={iconSize}
                                    onClick={toggleDisplayForm}
                                    className={formIsPending ? "cancel disable" : "cancel"}
                                ></FaTimes>
                            </form>
                        )}
                    </div>
                </div>
                <div className="post-comments-list">
                    {comments.map((comment, index) => (
                        <PostComment key={index} content={comment}></PostComment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Post;
