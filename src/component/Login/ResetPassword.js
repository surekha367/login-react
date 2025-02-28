// import React, { useState, useRef } from "react";

// function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [emailError, setEmailError] = useState(""); // State for email error message
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginError, setLoginError] = useState("");

//   // Add refs for the input fields
//   const emailInputRef = useRef(null);
//   const passwordInputRef = useRef(null);

//   // Email validation regex
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   function checkEmailFormat(email) {
//     // const emailInput = document.querySelector("input[type='email']");
//     if (emailRegex.test(email)) {
//       setEmailError("");
//       // emailInput.style.border = "1.5px solid #0868de";

//       // Only set border if currently focused
//       if (document.activeElement === emailInputRef.current) {
//         emailInputRef.current.style.border = "2px solid #0868de";
//       }
//     } else if (email === "") {
//       setEmailError("");
//       // emailInput.style.border = "1.5px solid #d8d8d8";
//       if (document.activeElement === emailInputRef.current) {
//         emailInputRef.current.style.border = "2px solid #0868de";
//       } else {
//         emailInputRef.current.style.border = "2px solid #d8d8d8";
//       }
//     } else {
//       setEmailError("Please enter a valid email address.");
//       // emailInput.style.border = "1.5px solid #ed0707";
//       emailInputRef.current.style.border = "2px solid #ed0707";
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     // if (!password) {
//     //   setPasswordError("Please enter a valid password.");
//     // } else {
//     //   setPasswordError("");
//     //   console.log("Submit Clicked");
//     // }

//     // Validate inputs
//     let isValid = true;
//     if (email === "" && password === "") {
//       setLoginError("Please enter both email and password values");
//       return;
//     }

//     if (email === "" || !emailRegex.test(email)) {
//       isValid = false;
//       //   const emailInput = document.querySelector("input[type='email']");
//       //   emailInput.style.border = "1.5px solid #ed0707";
//       // }
//       emailInputRef.current.style.border = "2px solid #ed0707";
//       setEmailError("Please enter a valid email address.");
//     }

//     if (password === "") {
//       isValid = false;
//       // const passwordInput = document.querySelector("input[type='password']");
//       // passwordInput.style.border = "1.5px solid #ed0707";
//       passwordInputRef.current.style.border = "2px solid #ed0707";
//       setPasswordError("Please enter a password.");
//     }

//     if (isValid) {
//       // Simulate authentication failure for demonstration purposes
//       setLoginError("The email or password you've entered is incorrect.");
//       console.log("Submit Clicked");
//     }
//   }

//   // Toggle password visibility
//   function togglePasswordVisibility() {
//     setShowPassword(!showPassword);
//   }

//   // Handle focus events
//   function handleFocus(e) {
//     e.target.style.border = "2px solid #0868de";
//   }

//   // Handle blur events
//   function handleBlur(e) {
//     // Only reset border if there's no error
//     if (e.target.type === "email") {
//       if (emailError === "" && email !== "") {
//         e.target.style.border = "2px solid #d8d8d8";
//       } else if (emailError !== "") {
//         e.target.style.border = "2px solid #ed0707";
//       } else {
//         e.target.style.border = "2px solid #d8d8d8";
//       }
//     } else if (e.target.type === "password" || e.target.type === "text") {
//       if (passwordError === "" && password !== "") {
//         e.target.style.border = "2px solid #d8d8d8";
//       } else if (passwordError !== "") {
//         e.target.style.border = "2px solid #ed0707";
//       } else {
//         e.target.style.border = "2px solid #d8d8d8";
//       }
//     }
//   }

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h1>Reset your password</h1>
//       <p>
//         Enter a new password below. Once updated, use this password to sign in.
//       </p>

//       <div className="input-container">
//         <div className="input-with-icon">
//           <img src="password_lock-808080.svg" alt="password-icon" />
//           <input
//             // type="password"
//             ref={passwordInputRef}
//             type={showPassword ? "text" : "password"}
//             placeholder="New password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               if (e.target.value !== "") {
//                 setPasswordError("");
//                 // e.target.style.border = "1.5px solid #d8d8d8";
//               }
//               setLoginError(""); // Clear login error on change
//             }}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <div className="show-password" onClick={togglePasswordVisibility}>
//             <img src="eye-icon-808080.svg" alt="password-show-icon" />
//           </div>
//         </div>
//         {passwordError && <p className="error-message">{passwordError}</p>}

//         <div className="input-with-icon">
//           <img src="password_lock-808080.svg" alt="password-icon" />
//           <input
//             // type="password"
//             ref={passwordInputRef}
//             type={showPassword ? "text" : "password"}
//             placeholder="Re-enter password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               if (e.target.value !== "") {
//                 setPasswordError("");
//                 // e.target.style.border = "1.5px solid #d8d8d8";
//               }
//               setLoginError(""); // Clear login error on change
//             }}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <div className="show-password" onClick={togglePasswordVisibility}>
//             <img src="eye-icon-808080.svg" alt="password-show-icon" />
//           </div>
//         </div>
//         {passwordError && <p className="error-message">{passwordError}</p>}

//         <button type="submit">Reset Password</button>
//       </div>
//       <a href="./" className="forgot-password">
//         Back to Login
//       </a>
//     </form>
//   );
// }

// export default ResetPassword;







// import React, { useState, useRef } from "react";
 
// function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [emailError, setEmailError] = useState(""); // State for email error message
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginError, setLoginError] = useState("");
 
//   // Add refs for the input fields
//   // const emailInputRef = useRef(null);
//   const passwordInputRef = useRef(null);
//   const confirmPasswordInputRef=useRef(null)
 
 
//   // Email validation regex
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
//   // function checkEmailFormat(email) {
//   //   // const emailInput = document.querySelector("input[type='email']");
//   //   if (emailRegex.test(email)) {
//   //     setEmailError("");
//   //     // emailInput.style.border = "1.5px solid #0868de";
 
//   //     // Only set border if currently focused
//   //     if (document.activeElement === emailInputRef.current) {
//   //       emailInputRef.current.style.border = "2px solid #0868de";
//   //     }
//   //   } else if (email === "") {
//   //     setEmailError("");
//   //     // emailInput.style.border = "1.5px solid #d8d8d8";
//   //     if (document.activeElement === emailInputRef.current) {
//   //       emailInputRef.current.style.border = "2px solid #0868de";
//   //     } else {
//   //       emailInputRef.current.style.border = "2px solid #d8d8d8";
//   //     }
//   //   } else {
//   //     setEmailError("Please enter a valid email address.");
//   //     // emailInput.style.border = "1.5px solid #ed0707";
//   //     emailInputRef.current.style.border = "2px solid #ed0707";
//   //   }
//   // }
 
//   function handleSubmit(e) {
//     e.preventDefault();
//     // if (!password) {
//     //   setPasswordError("Please enter a valid password.");
//     // } else {
//     //   setPasswordError("");
//     //   console.log("Submit Clicked");
//     // }
 
//     // Validate inputs
//     let isValid = true;
//     if (email === "" && password === "") {
//       setLoginError("Please enter both email and password values");
//       return;
//     }
 
//     if (email === "" || !emailRegex.test(email)) {
//       isValid = false;
//       //   const emailInput = document.querySelector("input[type='email']");
//       //   emailInput.style.border = "1.5px solid #ed0707";
//       // }
//       // emailInputRef.current.style.border = "2px solid #ed0707";
//       setEmailError("Please enter a valid email address.");
//     }
 
//     if (password === "") {
//       isValid = false;
//       // const passwordInput = document.querySelector("input[type='password']");
//       // passwordInput.style.border = "1.5px solid #ed0707";
//       passwordInputRef.current.style.border = "2px solid #ed0707";
//       setPasswordError("Please enter a password.");
//     }
 
//     if (isValid) {
//       // Simulate authentication failure for demonstration purposes
//       setLoginError("The email or password you've entered is incorrect.");
//       console.log("Submit Clicked");
//     }
//   }
 
//   // Toggle password visibility
//   function togglePasswordVisibility() {
//     setShowPassword(!showPassword);
//   }
 
//   // Handle focus events
//   function handleFocus(e) {
//     e.target.style.border = "2px solid #0868de";
//   }
 
//   // Handle blur events
//   function handleBlur(e) {
//     // Only reset border if there's no error
//     if (e.target.type === "email") {
//       if (emailError === "" && email !== "") {
//         e.target.style.border = "2px solid #d8d8d8";
//       } else if (emailError !== "") {
//         e.target.style.border = "2px solid #ed0707";
//       } else {
//         e.target.style.border = "2px solid #d8d8d8";
//       }
//     } else if (e.target.type === "password" || e.target.type === "text") {
//       if (passwordError === "" && password !== "") {
//         e.target.style.border = "2px solid #d8d8d8";
//       } else if (passwordError !== "") {
//         e.target.style.border = "2px solid #ed0707";
//       } else {
//         e.target.style.border = "2px solid #d8d8d8";
//       }
//     }
//   }
 
//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h1>Reset your password</h1>
//       <p>
//         Enter a new password below. Once updated, use this password to sign in.
//       </p>
 
//       <div className="input-container">
//         <div className="input-with-icon">
//           <img src="password_lock-808080.svg" alt="password-icon" />
//           <input
//             // type="password"
//             ref={passwordInputRef}
//             type={showPassword ? "text" : "password"}
//             placeholder="New password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               if (e.target.value !== "") {
//                 setPasswordError("");
//                 // e.target.style.border = "1.5px solid #d8d8d8";
//               }
//               setLoginError(""); // Clear login error on change
//             }}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <div className="show-password" onClick={togglePasswordVisibility}>
//             <img src="eye-icon-808080.svg" alt="password-show-icon" />
//           </div>
//         </div>
//         {passwordError && <p className="error-message">{passwordError}</p>}
 
//         <div className="input-with-icon">
//           <img src="password_lock-808080.svg" alt="password-icon" />
//           <input
//             // type="password"
//             ref={confirmPasswordInputRef}
//             type={showPassword ? "text" : "password"}
//             placeholder="Re-enter password"
//             value={confirmPassword}
//             onChange={(e) => {
//               setConfirmPassword(e.target.value);
//               if (e.target.value !== "") {
//                 setPasswordError("");
//                 // e.target.style.border = "1.5px solid #d8d8d8";
//               }
//               setLoginError(""); // Clear login error on change
//             }}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <div className="show-password" onClick={togglePasswordVisibility}>
//             <img src="eye-icon-808080.svg" alt="password-show-icon" />
//           </div>
//         </div>
//         {passwordError && <p className="error-message">{passwordError}</p>}
 
//         <button type="submit">Reset Password</button>
//       </div>
//       <a href="./" className="back-to-login">
//         Back to Login
//       </a>
//     </form>
//   );
// }
 
// export default ResetPassword;
 






import React, { useState, useRef } from "react";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  // Validate password function that returns feedback on what's missing
  const validatePassword = (password) => {
    if (!password) {
      return { isValid: false, errorMsg: "" };
    }
    
    const validationResults = [];
    
    // Check length
    if (password.length < 8) {
      validationResults.push("At least 8 characters");
    }
    
    // Check uppercase
    if (!/[A-Z]/.test(password)) {
      validationResults.push("One uppercase letter");
    }
    
    // Check lowercase
    if (!/[a-z]/.test(password)) {
      validationResults.push("One lowercase letter");
    }
    
    // Check digit
    if (!/\d/.test(password)) {
      validationResults.push("One number");
    }
    
    // Check special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      validationResults.push("One special character");
    }
    
    if (validationResults.length > 0) {
      return { 
        isValid: false, 
        errorMsg: `Missing: ${validationResults.join(', ')}` 
      };
    }
    
    return { isValid: true, errorMsg: "" };
  };

  // Toggle password visibility for main password
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  // Toggle password visibility for confirm password
  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Validate inputs
    let isValid = true;
    
    // Validate password
    if (password === "") {
      isValid = false;
      passwordInputRef.current.style.border = "2px solid #ed0707";
      setPasswordError("Please enter a password.");
    } else {
      const { isValid: validPassword, errorMsg } = validatePassword(password);
      if (!validPassword) {
        isValid = false;
        passwordInputRef.current.style.border = "2px solid #ed0707";
        setPasswordError(errorMsg);
      }
    }

    // Validate confirm password
    if (confirmPassword === "") {
      isValid = false;
      confirmPasswordInputRef.current.style.border = "2px solid #ed0707";
      setConfirmPasswordError("Please confirm your password.");
    } else if (password !== confirmPassword) {
      isValid = false;
      confirmPasswordInputRef.current.style.border = "2px solid #ed0707";
      setConfirmPasswordError("Passwords do not match.");
    }

    if (isValid) {
      console.log("Password reset successful");
      // Add your password reset logic here
    }
  }

  // Handle focus events
  function handleFocus(e) {
    e.target.style.border = "2px solid #0868de";
  }

  // Handle blur events
  function handleBlur(e) {
    // Default border style
    e.target.style.border = "2px solid #d8d8d8";
  }

  // Handle password input change with real-time validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    // Show real-time feedback on what's missing
    if (newPassword !== "") {
      const { isValid, errorMsg } = validatePassword(newPassword);
      setPasswordError(errorMsg);
      
      // Change border color based on validation
      if (isValid) {
        passwordInputRef.current.style.border = "2px solid #0868de"; // Blue for valid password
      } else {
        passwordInputRef.current.style.border = "2px solid #ed0707"; // Red for invalid password
      }
    } else {
      setPasswordError("");
      passwordInputRef.current.style.border = "2px solid #d8d8d8"; // Default border
    }
    
    // Update confirm password validation if both fields have values
    if (confirmPassword !== "") {
      if (newPassword === confirmPassword) {
        setConfirmPasswordError("");
        confirmPasswordInputRef.current.style.border = "2px solid #0868de";
      } else {
        setConfirmPasswordError("Passwords do not match.");
        confirmPasswordInputRef.current.style.border = "2px solid #ed0707";
      }
    }
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    
    // Clear error when typing
    if (newConfirmPassword === "") {
      setConfirmPasswordError("");
      confirmPasswordInputRef.current.style.border = "2px solid #d8d8d8";
      return;
    }
    
    // Only validate match if both fields have values
    if (password !== "") {
      if (password === newConfirmPassword) {
        setConfirmPasswordError("");
        confirmPasswordInputRef.current.style.border = "2px solid #0868de"; // Blue for matching passwords
      } else {
        setConfirmPasswordError("Passwords do not match.");
        confirmPasswordInputRef.current.style.border = "2px solid #ed0707"; // Red for non-matching passwords
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Reset your password</h1>
      <p>
        Enter a new password below. Once updated, use this password to sign in.
      </p>

      <div className="input-container">
        <div className="input-with-icon">
          <img src="password_lock-808080.svg" alt="password-icon" />
          <input
            id="password"
            ref={passwordInputRef}
            type={showPassword ? "text" : "password"}
            placeholder="New password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handleFocus}
          />
          <div className="show-password" onClick={togglePasswordVisibility}>
            <img src="eye-icon-808080.svg" alt="password-show-icon" />
          </div>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}

        <div className="input-with-icon">
          <img src="password_lock-808080.svg" alt="password-icon" />
          <input
            id="confirmPassword"
            ref={confirmPasswordInputRef}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onFocus={handleFocus}
          />
          <div className="show-password" onClick={toggleConfirmPasswordVisibility}>
            <img src="eye-icon-808080.svg" alt="password-show-icon" />
          </div>
        </div>
        {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}

        <button type="submit">Reset Password</button>
      </div>
      <a href="./" className="back-to-login">
        Back to Login
      </a>
    </form>
  );
}

export default ResetPassword;