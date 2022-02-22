import { useState } from "react";
import "../styles/Register.css";
/**
 * SOURCE de https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
 */

function CreateAccount(props) {
    // States for registration
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [naissance, setNaissance] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    // Handling the lastname change
    const handleLastname = (e) => {
        setLastname(e.target.value);
        setSubmitted(false);
    };
    // Handling the pseudo change
    const handlePseudo = (e) => {
        setPseudo(e.target.value);
        setSubmitted(false);
    };
    // Handling the pseudo change
    const handleNaissance = (e) => {
        setNaissance(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        sendForm();
    };
    const sendForm = async () => {
        const response = await fetch("http://localhost:3002/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                nom: name,
                prenom: lastname,
                naissance: naissance,
                pseudo: pseudo,
                email: email,
                password: password,
            }),
        });
        // Lecture du body de la réponse
        const responseBody = await response.json();

        // Erreur
        if (response.status !== 200) {
            console.log(responseBody.message);
            return;
        }
        if (responseBody.token) {
            console.log("you are now registered (and logged in)");
            localStorage.setItem("@token", responseBody.token);
            console.log("//TODO : clear form, and return back to home");
            return;
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>Utilisateur {name} as été créer avec succès !!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Merci de renseigner tout les champs</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>Enregistrement utilisateur</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form method="POST" className="registerForm">
                {/* Labels and inputs for form data */}
                <div className="name">
                    <label className="label">Nom </label>
                    <input onChange={handleName} className="input" data-field-name="nom" value={name} type="text" />
                </div>
                <div className="prenom">
                    <label className="label">Prenom </label>
                    <input
                        onChange={handleLastname}
                        className="input"
                        data-field-name="prenom"
                        value={lastname}
                        type="text"
                    />
                </div>
                <div className="dateOfBirth">
                    <label className="label">Date de Naissance </label>
                    <input
                        onChange={handleNaissance}
                        className="input"
                        data-field-name="naissance"
                        value={naissance}
                        type="text"
                    />
                </div>
                <div className="pseudo">
                    <label className="label">Pseudo </label>
                    <input
                        onChange={handlePseudo}
                        className="input"
                        data-field-name="pseudo"
                        value={pseudo}
                        type="text"
                    />
                </div>
                <div className="mail">
                    <label className="label">Email </label>
                    <input onChange={handleEmail} className="input" data-field-name="email" value={email} type="text" />
                </div>
                <div className="password">
                    <label className="label">Password </label>
                    <input
                        onChange={handlePassword}
                        className="input"
                        data-field-name="password"
                        value={password}
                        type="password"
                    />
                </div>

                <button onClick={handleSubmit} className="btn" type="submit">
                    Envoyer formulaire
                </button>
            </form>
        </div>
    );
}
export default CreateAccount;
