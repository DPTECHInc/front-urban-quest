import React from "react";
// import { register } from "../lib/api/public";
import { useState } from "react";
// import "../css/createPost.css";

const CreatePost = (props) => {
    // const handleFinish = async (value) => {
    //     const { nom, prenom, email, pass } = value;
    //     await register(nom, prenom, email, pass);
    //     console.log(value.nom, value.prenom, value.email, value.pass);
    // };

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [nom, setNom] = useState("");
    const handleChangeNom = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setNom(value);
        }
    };

    const [contenu, setContenu] = useState("");
    const handleChangeContenu = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setContenu(value);
        }
    };

    const [categorie, setCategorie] = useState("");
    const handleChangeCategorie = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setCategorie(value);
        }
    };

    const [passLocation, setLocation] = useState("");
    const handleChangeLocation = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setLocation(value);
        }
    };

    // const[butCreation, setButCreation] = useState(0);
    const handleButCreation = (event) => {
        // const value = event.target.value;
        // if(value == true) {
        // console.log(email);
        // console.log(pass);
        // useState(true);
    };

    return (
        <div className={props.visibility ? "visually-display" : "visually-hidden"}>
            <form method="POST">
                <div className="creationPost">
                    <div>
                        <input
                            className="inputNom"
                            type="text"
                            placeholder="Nom"
                            id="nom"
                            name="nom"
                            onChange={handleChangeNom}
                        />
                    </div>

                    <div>
                        <input
                            className="inputContenu"
                            type="text"
                            placeholder="Contenu"
                            id="contenu"
                            name="contenu"
                            onChange={handleChangeContenu}
                        />
                    </div>

                    <div>
                        {" "}
                        <input
                            className="inputCategorie"
                            type="categorie"
                            placeholder="Categorie"
                            id="categorie"
                            name="categorie"
                            onChange={handleChangeCategorie}
                        />
                    </div>

                    <div>
                        <input className="inputMdp" type="password" placeholder="Mot de passe" id="mdp" name="mdp" />
                    </div>

                    <div>
                        <button className="butConnexion">Créer un post</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default CreatePost;
