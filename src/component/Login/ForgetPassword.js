import React, { useState, useRef } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); // State for email error message

  // Add refs for the input fields
  const emailInputRef = useRef(null);

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

    if (email === "" || !emailRegex.test(email)) {
      emailInputRef.current.style.border = "2px solid #ed0707";
      setEmailError("Please enter a valid email address.");
    }
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
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Reset your password</h1>
      <p>
        Enter your email, and we'll send reset instructions if
        we find an account associated with it.
      </p>

      <div className="reset-input-container">
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
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {emailError && <div className="input-error-message">{emailError}</div>}
        <button type="submit">Send recovery link</button>
      </div>
      <a href="./" className="back-to-login">
        Back to Login
      </a>
    </form>
  );
}

export default ForgetPassword;
