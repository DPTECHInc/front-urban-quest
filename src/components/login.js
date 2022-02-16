import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CreateAccount from "./createAccount";
import { Link } from "react-router-dom";
import "../styles/Login.css";
/**
 *  Source from https://contactmentor.com/login-form-react-js-code/
 */
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit} method="POST">
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Se connecter
                </Button>
                <Link to="/register" block size="lg" type="button">
                    Pas de compte ?
                </Link>
            </Form>
        </div>
    );
}
export default Login;
