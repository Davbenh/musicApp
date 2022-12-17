import { useState, useContext, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { LoggedInStatus } from "../../App";
import "./Signup.css";

function Signup() {
  const [successSignUp, setSuccessSignUp] = useState(false);
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regPassConf, setRegPassConf] = useState("");
  const [regFName, setRegFName] = useState("");
  const [regLName, setRegLName] = useState("");
  const [regGender, setRegGender] = useState("male");
  const { loggedIn, setLoggedIn, users, setUsers, myUser, setMyUser } =
    useContext(LoggedInStatus);
  const [errorMessages, setErrorMessages] = useState("");


  const handleSign = async (e) => {
    setErrorMessages("");
    e.preventDefault();
    if (regPass !== regPassConf) {
      return setErrorMessages("אימות סיסמא נכשל - אנא הזן סיסמא תואמת");
    }
    if (/\d/.test(regFName) || /\d/.test(regLName)) {
      return setErrorMessages(
        "שם פרטי או שם משפחה לא תקינים,אנא הזן אותיות בלבד"
      );
    }

    await fetch("http://localhost:3456/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fName: regFName,
        lName: regFName,
        email: regEmail,
        password: regPass,
        gender: regGender,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setTimeout(() => {
            setSuccessSignUp(true);
          }, 500);
          {setTimeout(() => {
            window.location.href = "/Login";
          }, 2200)}
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessages(err);
      });
  };

  return successSignUp ? (
      <div className="signup-page">
        <div className="signup">
          <img
            src="./images/musicapp-logo.png"
            className="logo"
            alt="logo"
          />
          <span className="errorMsg">
            הרשמה בוצעה בהצלחה. <br />
            הנכם מועברים לעמוד ההתחברות.
          </span>
        </div>
      </div>
  ) : (
    <div className="signup-page">
      <div className="signup">
        <img
          src="./images/musicapp-logo.png"
          className="logo"
          alt="logo"
        />
        <span className="errorMsg">
          שמחים שבחרתם להצטרף <br /> אנא מלאו את הפרטים ליצירת משתמש חדש
        </span>
        <form className="form" onSubmit={handleSign}>
          <div className="input-group">
            <label htmlFor="email">*כתובת מייל</label>
            <input
              type="email"
              name="email"
              placeholder="email address"
              onChange={(e) => {
                setRegEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">*סיסמא</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setRegPass(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="passwordCheck">*אימות סיסמא</label>
            <input
              type="password"
              name="passwordCheck"
              onChange={(e) => {
                setRegPassConf(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">שם פרטי</label>
            <input
              type="text"
              name="fname"
              onChange={(e) => {
                setRegFName(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Lname">שם משפחה</label>
            <input
              type="text"
              name="Lname"
              onChange={(e) => {
                setRegLName(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label className="label-select" htmlFor="gender">
              מין
            </label>
            <select
              className="select-select"
              name="gender"
              onChange={(e) => setRegGender(e.target.value)}
            >
              <option value="male">זכר</option>
              <option value="female">נקבה</option>
            </select>
          </div>
          <br />
          <span className="errorMsg">{errorMessages}</span>
          <button className="primary" onClick={() => handleSign}>
            הירשם
          </button>
          <Link to="/Login">
            <button className="secondary">כבר רשום? לחץ להתחברות</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
