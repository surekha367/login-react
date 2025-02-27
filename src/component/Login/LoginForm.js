import React, { useState, useRef } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(""); // State for email error message
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Add refs for the input fields
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function checkEmailFormat(email) {
    // const emailInput = document.querySelector("input[type='email']");
    if (emailRegex.test(email)) {
      setEmailError("");
      // emailInput.style.border = "1.5px solid #0868de";

      // Only set border if currently focused
      if (document.activeElement === emailInputRef.current) {
        emailInputRef.current.style.border = "2px solid #0868de";
      }
    } else if (email === "") {
      setEmailError("");
      // emailInput.style.border = "1.5px solid #d8d8d8";
      if (document.activeElement === emailInputRef.current) {
        emailInputRef.current.style.border = "2px solid #0868de";
      } else {
        emailInputRef.current.style.border = "2px solid #d8d8d8";
      }
    } else {
      setEmailError("Please enter a valid email address.");
      // emailInput.style.border = "1.5px solid #ed0707";
      emailInputRef.current.style.border = "2px solid #ed0707";
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!password) {
    //   setPasswordError("Please enter a valid password.");
    // } else {
    //   setPasswordError("");
    //   console.log("Submit Clicked");
    // }

    // Validate inputs
    let isValid = true;
    if (email === "" && password === "") {
      setLoginError("Please enter both email and password values");
      return;
    }

    if (email === "" || !emailRegex.test(email)) {
      isValid = false;
      //   const emailInput = document.querySelector("input[type='email']");
      //   emailInput.style.border = "1.5px solid #ed0707";
      // }
      emailInputRef.current.style.border = "2px solid #ed0707";
      setEmailError("Please enter a valid email address.");
    }

    if (password === "") {
      isValid = false;
      // const passwordInput = document.querySelector("input[type='password']");
      // passwordInput.style.border = "1.5px solid #ed0707";
      passwordInputRef.current.style.border = "2px solid #ed0707";
      setPasswordError("Please enter a password.");
    }

    if (isValid) {
      // Simulate authentication failure for demonstration purposes
      setLoginError("The email or password you've entered is incorrect.");
      console.log("Submit Clicked");
    }
  }

  // Toggle password visibility
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  // Handle focus events
  function handleFocus(e) {
    e.target.style.border = "2px solid #0868de";
  }

  // Handle blur events
  function handleBlur(e) {
    // Only reset border if there's no error
    if (e.target.type === "email") {
      if (emailError === "" && email !== "") {
        e.target.style.border = "2px solid #d8d8d8";
      } else if (emailError !== "") {
        e.target.style.border = "2px solid #ed0707";
      } else {
        e.target.style.border = "2px solid #d8d8d8";
      }
    } else if (e.target.type === "password" || e.target.type === "text") {
      if (passwordError === "" && password !== "") {
        e.target.style.border = "2px solid #d8d8d8";
      } else if (passwordError !== "") {
        e.target.style.border = "2px solid #ed0707";
      } else {
        e.target.style.border = "2px solid #d8d8d8";
      }
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Welcome to BidGenie</h1>
      <p>Log in by entering your credentials below.</p>

      {loginError && (
        <div className="login-error">
          <img src="/error-icon.svg" alt="Error" className="error-icon-svg" />
          {/* <span className="error-icon">!</span> */}
          {loginError}
        </div>
      )}

      <div className="input-container">
        <div className="input-with-icon">
          <img src="email-808080.svg" alt="email-icon" />
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              checkEmailFormat(e.target.value);
              setLoginError("");
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {emailError && <p className="error-message">{emailError}</p>}
        {/* Show error message */}
        <div className="input-with-icon">
          <img src="password_lock-808080.svg" alt="password-icon" />
          <input
            // type="password"
            ref={passwordInputRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value !== "") {
                setPasswordError("");
                // e.target.style.border = "1.5px solid #d8d8d8";
              }
              setLoginError(""); // Clear login error on change
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="show-password" onClick={togglePasswordVisibility}>
            <img src="eye-icon-808080.svg" alt="password-show-icon" />
          </div>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <div className="remember-me-forgot-password">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="./" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
}

export default LoginForm;
