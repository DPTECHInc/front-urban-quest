import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Header from "../assets/mountain-lake-header_1.jpg";
import Logo from "../assets/Logo.png";
import "../styles/profil.css";

function Profil(props) {
    let [displayForm, setDisplayForm] = useState(false);
    const toggleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };

    let [nom, setNom] = useState("");
    const handleChangeNomField = (event) => {
        setNom(event.target.value);
    };

    let [prenom, setPrenom] = useState("");
    const handleChangePrenomField = (event) => {
        setPrenom(event.target.value);
    };

    let [naissance, setNaissance] = useState("");
    const handleChangeNaissanceField = (event) => {
        setNaissance(event.target.value);
    };

    let [pseudo, setPseudo] = useState("");
    const handleChangePseudoField = (event) => {
        setPseudo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nom);
        return false;
    };

    const navigate = useNavigate();

    return (
        <div className="profil">
            <div className="Header">
                <div className="backgroundImg">
                    <img src={Header} className="imageHeader" />
                    <img src={Logo} className="imageLogoHeader" />
                    <nav className="navProfil">
                        <ul className="navUlProfil">
                            <div className="BtnEdit"></div>
                            <button
                                onClick={() => {
                                    navigate("/profil/edit");
                                }}
                                className="buttonEdit"
                            >
                                Edit Profil
                            </button>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="MyPost">
                <div className="headerPost">
                    <h2>My previous post</h2>
                </div>
                <div className="myPreviousPost">
                    <h2>Titre</h2>
                    <p>Le contenu</p>
                </div>
            </div>
        </div>
    );
}

export default Profil;
