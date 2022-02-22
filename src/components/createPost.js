import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddImage from "./ButtonImg";

const CreatePost = (props) => {
    // const handleFinish = async (value) => {
    //     const { nom, prenom, email, pass } = value;
    //     await register(nom, prenom, email, pass);
    //     console.log(value.nom, value.prenom, value.email, value.pass);
    // };
    // States for Redirect URL
    const navigate = useNavigate();
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

    const [location, setLocation] = useState("");
    const handleChangeLocation = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setLocation(value);
        }
    };

    // const [img, setImage] = useState("");
    // const handleChangeImage = (event) => {
    //     const value = event.target.value;

    //     if (value !== "") {
    //         setImage(value);
    //     }
    //     const formData = new FormData();
    //     formData.append("image", img.raw);
    // };

    const [image, setImage1] = useState(null);

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nom === "" || contenu === "" || categorie === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        sendPost();
        navigate("/");
    };
    const sendPost = async () => {
        await fetch("http://localhost:3002/posts", {
            method: "POST",
            headers: {
                Authorization: "bearer " + localStorage.getItem("@token"),
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                nom: nom,
                contenu: contenu,
                categorie: categorie,
                location: location,
                img: { body: FormData },
            }),
        });
    };
    //Redirect to HOME after post form

    // Showing success message
    // const successMessage = () => {
    //     return (
    //         <div
    //             className="success"
    //             style={{
    //                 display: submitted ? "" : "none",
    //             }}
    //         >
    //             <h1>Post {nom} as été créer avec succès !!</h1>
    //         </div>
    //     );
    // };

    // Showing error message if error is true
    // const errorMessage = () => {
    //     return (
    //         <div
    //             className="error"
    //             style={{
    //                 display: error ? "" : "none",
    //             }}
    //         >
    //             <h1>Merci de renseigner tout les champs</h1>
    //         </div>
    //     );
    // };

    return (
        <div>
            <form method="POST">
                <div className="creationPost">
                    <div>
                        <label htmlFor="nom"></label>
                        <input
                            className="inputNom"
                            type="text"
                            placeholder="TITRE"
                            id="nom"
                            name="nom"
                            onChange={handleChangeNom}
                        />
                    </div>

                    <div>
                        <label htmlFor="contenu"></label>
                        <input
                            className="inputContenu"
                            type="text"
                            placeholder="CONTENU"
                            id="contenu"
                            name="contenu"
                            onChange={handleChangeContenu}
                        />
                    </div>

                    <div>
                        <label htmlFor="categorie"></label>
                        <select className="inputCategorie" id="categorie" onChange={handleChangeCategorie}>
                            <option>Choisir catégorie</option>
                            <option value="Urbex">Urbex blog</option>
                            <option value="Enigmes">Enigmes blog</option>
                            <option value="Nft">NFT E-Commerce</option>
                        </select>
                        {/* <p>{categorie}</p> */}
                    </div>
                    <div>
                        <label htmlFor="location"></label>
                        <input
                            className="inputLocation"
                            type="text"
                            placeholder="Location"
                            id="location"
                            name="location"
                            onChange={handleChangeLocation}
                        />
                    </div>

                    <AddImage onSelectImage={setImage1} />

                    <div>
                        <button onClick={handleSubmit} type="submit" className="butCreate">
                            Créer un post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default CreatePost;
