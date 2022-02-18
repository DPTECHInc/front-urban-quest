import React from "react";
import { BiCommentAdd } from "react-icons/bi";
import { useState } from "react";
import CreatePost from "./createPost";

function ButtonPost() {
    const [displayFormCreatePost, setDisplayFormCreatePost] = useState(false);
    const toggleDisplayForm = (event) => {
        // changement de l'affichage du formulaire
        // si oui => non, si non => oui
        setDisplayFormCreatePost(!displayFormCreatePost);
    };
    return (
        <div>
            <div className="AddPostSection" onClick={toggleDisplayForm}>
                <h2 className="TitreAddSection">Nouvelle aventure ?!</h2>
                <BiCommentAdd size="50" className="AddButton"></BiCommentAdd>
            </div>
            <CreatePost visibility={displayFormCreatePost} />
        </div>
    );
}
export default ButtonPost;
