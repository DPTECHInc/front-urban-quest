import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
/**
 *  Source from https://contactmentor.com/login-form-react-js-code/
 */
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [backendResponse, setBackendResponse] = useState("");
    const navigate = useNavigate();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // Options de la requête
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        // Requête de connexion
        const response = await fetch("http://localhost:3002/login", options);

        // Lecture du body de la réponse
        const responseBody = await response.json();

        if (responseBody.message) {
            // Erreur or not (always)
            setBackendResponse(responseBody.message);
        }
        // Erreur
        if (response.status !== 200) {
            console.log(responseBody.message);
            return;
        }

        if (responseBody.token) {
            // Stockage
            localStorage.setItem("@token", responseBody.token);
            console.log("Vous êtes connecté");
            navigate("/");
            return;
        }
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit} method="POST">
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        autocomplete="on"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        autocomplete="on"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" disabled={!validateForm()}>
                    Se connecter
                </Button>
                <Link to="/register" block size="lg" type="button">
                    Pas de compte ?
                </Link>
                {backendResponse && <span>{backendResponse}</span>}
            </Form>
        </div>
    );
}
export default Login;
