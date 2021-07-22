import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
// import { useFormFields } from "../../libs/hooksLib";
import eye from "../../assets/icons/eye.svg";
import eyeFill from "../../assets/icons/eye-fill.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg";
import eyeFillSlash from "../../assets/icons/eye-slash-fill.svg";
import styles from "../../components/LogInSignUp.module.css";
import LogInSignUpGrid from "../../components/LogInSignUp";

function Signup() {
    document.title = "Rideshareapp | Sign Up";
    const history = useHistory();
    const { userIsAuthenticated } = useAppContext();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function validateForm() {
        return first.length > 0 && last.length > 0 && phone.length > 0 && email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // setIsLoading(true);
        try {
            const res = await fetch(`http://127.0.0.1:9000/users/register`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first: first,
                    last: last,
                    phone: phone,
                    email: email,
                    password: password
                })
            });
            if (res.status === 200) {
                userIsAuthenticated(true);
                history.push("/");
            }
        } catch (err) {
            alert(err);
            // setIsLoading(false);
        }

    }

    let form =
        <form style={{ margin: "0 auto" }} className={styles.form} onSubmit={handleSubmit}>

            <div>
                <label htmlFor="firstInput" >First Name</label>
                <input autoFocus type="text" className={`${styles.inputTypeText} ${styles.inputField}`} id="firstInput" aria-describedby="firstHelp" onChange={(e) => setFirst(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="lastInput" >Last Name</label>
                <input type="text" id="lastInput" className={`${styles.inputTypeText} ${styles.inputField}`} aria-describedby="lastHelp" onChange={(e) => setLast(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="phoneInput" >Phone Number</label>
                <input type="tel" id="phoneInput" className={`${styles.inputTypeTel} ${styles.inputField}`} aria-describedby="phoneHelp" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => setPhone(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="emailInput" >Email Address</label>
                <input type="email" id="emailInput" className={`${styles.inputTypeEmail} ${styles.inputField}`} aria-describedby="emailHelp" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div style={{ position: "relative" }}>
                <label htmlFor="passwordInput">Password</label>
                <div className={styles.passwordField}>
                    <input type={showPassword ? "text" : "password"} style={{ width: "90%", borderRadius: "5px 0px 0px 5px" }} className={`${styles.inputTypePassword} ${styles.inputFieldPassword}`} id="passwordInput" placeholder="•••••" onChange={(e) => setPassword(e.target.value)}></input>
                    <img id="togglePassword" className={styles.togglePassword} src={showPassword ? eyeSlash : eye} onClick={handleShowPassword}></img>
                </div>
            </div>

            <button className={styles.buttonTypeSubmit} type="submit" disabled={!validateForm()}>Next</button>
        </form >;

    return (
        <LogInSignUpGrid prompt1="Already a member?" prompt2="/login" prompt3="Log in here" form={form} />
    );
}

export default Signup;
