import success from "./../../assets/success.svg";

function CheckYourMail() {
  return (
    <form className="login-form">
      <img src={success} />
      <h1>Password updated</h1>
      <p>
        Your password has been changed! You can now log in with your new
        credentials.
      </p>

      <a href="./" className="back-to-login">
        Login to Account
      </a>
    </form>
  );
}

export default CheckYourMail;
