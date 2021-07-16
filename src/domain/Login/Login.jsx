import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginbanner from "../../assets/images/loginbanner.jpg";
import { useAppContext } from "../../libs/contextLib";
// import { useFormFields } from "../../libs/hooksLib";

function Login() {

    const history = useHistory();
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
                history.push("/");
            }
        } catch (err) {
            alert(err);
            // setIsLoading(false);
        }

    }

    return (
        <div className="login">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={loginbanner} alt="Login banner" />
                        </div>
                        <div className="col-6">
                            <h1 className="font-weight-light">Login</h1>
                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="emailInput" >Email</label>
                                    <input autoFocus type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                                
                                <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
