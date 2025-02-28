import checkEmail from "./../../assets/checkEmail.svg";

function CheckYourMail() {
  return (
    <form className="login-form">
      <img src={checkEmail} />
      <h1>Check your mail</h1>
      <p>
        Please check the email address Johndoe@Innovation.com
        for instructions to reset your password.
      </p>

      <a href="./" className="back-to-login">
        Back to Login
      </a>
    </form>
  );
}

export default CheckYourMail;
