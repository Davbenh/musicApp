import { useState } from "react";
import './login.css'


const Login = () => {
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
const users = [{ username: "Jane", password: "testpassword" }];


return (
    <div className="login-page">
    <div className="login">
    <img src="./images/musicapp-logo.png" className="logo" alt="Business view - Reports" />
    <form className="form" /*onSubmit={this.handleSubmit}*/>
      <div className="input-group">
        <label htmlFor="username">שם משתמש</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">סיסמא</label>
        <input type="password" name="password" />
      </div>
      <button className="primary" /*onClick={this.handleClick}*/>כניסה</button>
    </form>
    <button className="secondary" >
     הרשמה
    </button>
  </div>
  </div>
)
};


export default Login;
