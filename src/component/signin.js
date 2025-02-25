import React, { useState } from "react";
import "./signin.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState(""); // State for email error message

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Check if email matches regex
        if (!emailRegex.test(email)) {
            setEmailError("Enter valid email");
            return;
        }

        setEmailError(""); // Clear error if email is valid

        // Proceed with form submission
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    return (
        <div className="login-container">
            <div className="left-container">
                <img
                    className="logo-image"
                    src="logo.png"
                    alt="BidGenie Logo"
                />
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Welcome Back</h1>
                        <p>Log in by entering your credentials below.</p>
                        <div className="input-container">
                            <div className="input-with-icon">
                                <img src="mail.svg" alt="email-icon" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {emailError && (
                                <p className="error-message">{emailError}</p>
                            )}{" "}
                            {/* Show error message */}
                            <div className="input-with-icon">
                                <img
                                    src="password_lock.svg"
                                    alt="password-icon"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="remember-me-forgot-password">
                                <label className="remember-me">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={() =>
                                            setRememberMe(!rememberMe)
                                        }
                                    />
                                    Remember Me
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-container"></div>
        </div>
    );
}

export default LoginPage;
