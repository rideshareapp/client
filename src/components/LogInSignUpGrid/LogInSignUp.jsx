import React from "react";
import { Link } from "react-router-dom";
import loginbanner from "../../assets/images/loginbanner1.jpg";
// import { useFormFields } from "../../libs/hooksLib";
import styles from "./LogInSignUp.module.css";

export default function LogInSignUpGrid(props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={loginbanner} alt="Banner" />
            </div>
            <div className={styles.formSection}>
                <div className={styles.logo}>
                    Rideshareapp
                </div>
                {props.form}
                <div className={styles.prompt} >
                    <p>{props.prompt1} &#8211; <Link className={styles.promptLink} to={props.prompt2}>{props.prompt3}</Link></p>
                </div>
            </div>
        </div>
    );
}