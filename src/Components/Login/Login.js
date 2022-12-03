import { useState, useContext } from "react";
import { Navigate,Link } from "react-router-dom";
import { LoggedInStatus } from "../../App";
import "./login.css";

const Login = () => {
  const { loggedIn, setLoggedIn,users,setUsers,myUser,setMyUser } = useContext(LoggedInStatus);
  const [uName, setuName] = useState("");
  const [uPass, setuPass] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
 

  function handleClick(e) {
    e.preventDefault();
    const userData = users.find((user) => user.username === uName);

    // Compare user info
    if (userData) {
      if (userData.password !== uPass) {
        // Invalid password
        setErrorMessages("פרטי התחברות שגויים");
      } else {
        setMyUser(uName);
        setLoggedIn(true);
        <Navigate to="/home" />
      }
    } else {
      // Username not found
      setErrorMessages("פרטי התחברות שגויים");
    }
  }

  return loggedIn ? (
    <Navigate to="/home" />
  ) : (
    <div className="login-page">
      <div className="login">
        <img
          src="./images/musicapp-logo.png"
          className="logo"
          alt="Business view - Reports"
        />
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">שם משתמש</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => {
                setuName(e.target.value);
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
        <Link to="/Signup"><button className="secondary">הרשמה</button></Link>
      </div>
    </div>
  );
};

export default Login;
