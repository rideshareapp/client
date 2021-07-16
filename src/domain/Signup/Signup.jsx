import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginbanner from "../../assets/images/loginbanner.jpg";
import { useAppContext } from "../../libs/contextLib";
// import { useFormFields } from "../../libs/hooksLib";
// import eye from "../../assets/eye.svg";
import eyeFill from "../../assets/icons/eye-fill.svg";
// import eyeSlash from "../../assets/eye-slash.svg";
import eyeFillSlash from "../../assets/icons/eye-slash-fill.svg";

function Signup() {

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

    return (
        <div className="signup">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={loginbanner} alt="Login banner" />
                        </div>
                        <div className="col-6">
                            <h1 className="font-weight-light">Sign Up</h1>
                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="firstInput" >First Name</label>
                                    <input autoFocus type="text" className="form-control" id="firstInput" aria-describedby="firstHelp" placeholder="First Name" onChange={(e) => setFirst(e.target.value)}></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastInput" >Last Name</label>
                                    <input type="text" className="form-control" id="lastInput" aria-describedby="lastHelp" placeholder="Last Name" onChange={(e) => setLast(e.target.value)}></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneInput" >Phone Number</label>
                                    <input type="tel" className="form-control" id="phoneInput" aria-describedby="phoneHelp" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => setPhone(e.target.value)}></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="emailInput" >Email Address</label>
                                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type={showPassword ? "test" : "password"} className="form-control" id="passwordInput" placeholder="•••••" onChange={(e) => setPassword(e.target.value)}></input>
                                    <img id="togglePassword" src={showPassword ? eyeFillSlash : eyeFill} onClick={handleShowPassword}></img>
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
