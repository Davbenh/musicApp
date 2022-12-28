import { useState, useContext} from "react";
import { Navigate, Link } from "react-router-dom";
import { LoggedInStatus } from "../../App";
import "./login.css";

const Login = () => {
  const { loggedIn} = useContext(LoggedInStatus);
  const [uEmail, setUEmail] = useState("");
  const [uPass, setuPass] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3456/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: uEmail,
        password: uPass,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("Authorization", `Bearer ` + data.token);
        {setTimeout(() => {
          window.location.href = "/";
        }, 1300)}
        
      })
      .catch((err) => {
        console.error(err);
        setErrorMessages("סיסמא או שם משתמש לא נכונים");
      })
  }


  
  return loggedIn ? (
    <Navigate to="/home" />
  ) : (
    <div className="login-page">
      <div className="login">
        <img src="./images/musicapp-logo.png" className="logo" alt="logo" />
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">אימייל</label>
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              onChange={(e) => {
                setUEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">סיסמא</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setuPass(e.target.value);
              }}
            />
          </div>
          <span className="errorMsg">{errorMessages}</span>
          <button className="primary" onClick={handleClick}>
            כניסה
          </button>
        </form>
        <Link to="/Signup">
          <button className="secondary">הרשמה</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
