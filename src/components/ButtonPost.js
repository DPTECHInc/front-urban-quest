import React from "react";
import { BiCommentAdd } from "react-icons/bi";
import { useState } from "react";
import CreatePost from "./createPost";
import { Link } from "react-router-dom";

function ButtonPost() {
    // doit on afficher ou non le formulaire de création de post
    // true => oui, false => ne rien afficher
    // const [displayFormCreatePost, setDisplayFormCreatePost] = useState(false);
    // const toggleDisplayForm = (event) => {
    //     // changement de l'affichage du formulaire
    //     // si oui => non, si non => oui
    //     setDisplayFormCreatePost(!displayFormCreatePost);
    // };
    // const clickCreatePost = CreatePost;
    return (
        <Link to="/addpost">
            <div className="AddPostSection">
                <h2 className="TitreAddSection">Nouvelle aventure ?!</h2>
                <BiCommentAdd size="50" className="AddButton"></BiCommentAdd>
            </div>
        </Link>

        // <CreatePost visibility={displayFormCreatePost} />
    );
}
export default ButtonPost;
