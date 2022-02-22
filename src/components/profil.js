import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Header from "../assets/mountain-lake-header_1.jpg";
import Urbex from "../assets/urbexpic.jpg";
import Logo from "../assets/Logo.png";
import { useEffect } from "react";
import "../styles/profil.css";

function Profil(props) {
    let [displayForm, setDisplayForm] = useState(false);
    const toggleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };

    let [userData, setUserData] = useState({});
    useEffect(async () => {
        const response = await fetch("http://localhost:3002/profil", {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("@token"),
                "Content-Type": "application/json",
            },
        });

        let userInfo = await response.json();
        setUserData(userInfo);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log();
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
                <div className="headerPost"></div>
                <div className="mainBody">
                    <div className="leftBody">
                        <div className="infoUser">
                            <h3>About me</h3>
                            <ul className="listAbout">
                                <li>Nom : {userData.nom}</li>
                                <li>Prenom : {userData.prenom}</li>
                                <li>Date de Naissance : {userData.naissance}</li>
                                <li>Pseudo : {userData.pseudo}</li>
                            </ul>
                        </div>
                        <div className="Amis">
                            <h3>Mes Amis</h3>
                            <ul className="listAbout">
                                <li>Jean</li>
                                <li>Luc</li>
                                <li>Josiane</li>
                                <li>Pepito</li>
                            </ul>
                        </div>
                    </div>
                    <div className="myPreviousPost">
                        <div className="previousPost">
                            <h3>My Previous Post</h3>
                        </div>
                        <h2>A Green Paradise Lost</h2>
                        <img src={Urbex} className="urbex" />
                        <h4>L'exploration du jardin de Poison Ivy</h4>
                        <p>
                            C'est avec grande surprise que nous sommes tombés sur cette serre abandonnée derrière une
                            maison de ville. La maison était délabrée et depuis quelques années déjà les squatteurs
                            avaient établi leur campement. C'était évidemment une occasion formidable pour nous de
                            s'embarquer dans de l'Urbex comme on l'aime ! Si cette exploration vous intéresse (et je
                            vous la recommande), lisez ci dessous les instructions pour une exploration en confort et en
                            toute sécurité :
                        </p>
                        <p>Equipements nécessaire :</p>
                        <ul className="listeEquipement">
                            <li>- Veste chaude (atmosphère très humide)</li>
                            <li>- Lampe Torche</li>
                            <li>- Appareil Photo / Camescope</li>
                            <li>- Couteau</li>
                            <li>- Pince (certain grillage était difficile à escalader</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;
