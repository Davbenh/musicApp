import { useState, useContext, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { LoggedInStatus } from "../../App";
import "./Signup.css";

function Signup() {
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");
  const { loggedIn, setLoggedIn, users, setUsers,myUser,setMyUser } = useContext(LoggedInStatus);
  const [errorMessages, setErrorMessages] = useState("");
  const usersList = [{ ...users }];



  function handleSign(e) {
    setErrorMessages("");
    e.preventDefault();

    const userData = users.find((user) => user.username === regUser);

    if (userData) {
      return setErrorMessages("שם משתמש קיים במערכת");
    } else {
      setUsers((prev) => [...prev, { username: regUser, password: regPass }]);
      setErrorMessages("הרשמה בוצעה בהצלחה! הנך מועבר להתחברות...");
        setMyUser(regUser)
        setTimeout(()=>{setLoggedIn(true);},1500)
    }
  }



  return loggedIn ? (
    <Navigate to="/home" />
  ) : (
    <div className="signup-page">
      <div className="signup">
        <img
          src="./images/musicapp-logo.png"
          className="logo"
          alt="Business view - Reports"
        />
        <span className="errorMsg">
          שמחים שבחרתם להצטרף <br /> אנא מלאו את הפרטים ליצירת משתמש חדש
        </span>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">שם משתמש</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => {
                setRegUser(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">סיסמא</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setRegPass(e.target.value);
              }}
            />
          </div>
          <span className="errorMsg">{errorMessages}</span>
          <button className="primary" onClick={handleSign}>
            הירשם
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
