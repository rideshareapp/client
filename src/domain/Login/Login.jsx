import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
// import { useFormFields } from "../../libs/hooksLib";
import styles from "../../components/LogInSignUpGrid/LogInSignUp.module.css";
import { LogInSignUpGrid } from "../../components";

export default function Login() {
    document.title = "Rideshareapp | Log In";
    const { userIsAuthenticated } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // setIsLoading(true);
        try {
            const res = await fetch(`http://127.0.0.1:9000/users/login`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password })
            });
            if (res.status === 200) {
                userIsAuthenticated(true);
                return <Redirect to="/" />;
            } else if (res.status === 401 || res.status === 409) {
                alert("Incorrect email or password");
            }
        } catch (err) {
            alert(err);
            // setIsLoading(false);
        }

    }

    let form =
        < form style={{ margin: "20vh auto" }} className={styles.form} onSubmit={handleSubmit} >

            <div>
                <label htmlFor="emailInput" >Email Address</label>
                <input autoFocus type="email" className={`${styles.inputTypeEmail} ${styles.inputField}`} id="emailInput" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className={`${styles.inputTypePassword} ${styles.inputField}`} id="passwordInput" onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button className={styles.buttonTypeSubmit} type="submit" disabled={!validateForm()}>Log in</button>
        </form >;

    return (
        <LogInSignUpGrid prompt1="Not a member?" prompt2="/signup" prompt3="Sign up here" form={form} />
    );
}