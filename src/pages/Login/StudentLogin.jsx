import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css"


const StudentLogin = () => {
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
        let navigate = useNavigate()
          const onLogin = (e) => {
           navigate("/make-appointment")
          };
          return (
            <div className="login-page">
             <h1> Öğrenci Girişi </h1>
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
                Öğretmen Misiniz? <NavLink to="/">Öğretmen Girişi</NavLink>
              </p>
              <p className="text-sm text-white text-center">
                Hesabınız yok mu? <NavLink to="/register">Kayıt ol</NavLink>
              </p>
            </div>
          );
        };
        
export default StudentLogin