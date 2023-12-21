import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css"

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="register-page">
      <section> 
        <div>
          <div>
            <h1> Randevu Alabilmek İçin Kayıt Olunuz </h1>
            <form>
              <div className="inputs">
                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>

              <div className="inputs">
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Şifre"
                />
              </div>

              <button className="register-btn" type="submit" onClick={onSubmit}>
                Kayıt Ol
              </button>
            </form>

            <p>
              Hesabınız var mı? <NavLink to="/">Giriş Yap</NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
