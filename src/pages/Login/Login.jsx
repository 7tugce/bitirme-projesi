import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="login-page">
     <h1> Randevu Alabilmek İçin Giriş Yapınız </h1>
      <form>
        <div className="inputs">
          <label htmlFor="email-address">Email</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={onLogin}>Giriş Yap</button>
        </div>
      </form>
      <p className="text-sm text-white text-center">
        Hesabınız yok mu? <NavLink to="/register">Kayıt ol</NavLink>
      </p>
    </div>
  );
};

export default Login;
