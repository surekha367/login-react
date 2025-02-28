import LoginForm from "./LoginForm";
import ForgetPassword from "./ForgetPassword";
import CheckYourMail from "./CheckYourMail";
import ResetPassword from "./ResetPassword";
import PasswordUpdated from "./PasswordUpdated";

function SignIn() {
  return (
    <>
      <img className="logo-image" src="logo.png" alt="BidGenie Logo" />
      <div className="login-container">
        <div className="left-container">
          <div className="login-form-container">
            {/* <LoginForm /> */}
            {/* <ForgetPassword /> */}
            {/* <CheckYourMail /> */}
            <ResetPassword />
            {/* <PasswordUpdated /> */}
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </>
  );
}

export default SignIn;
