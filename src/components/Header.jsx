import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <form className="d-flex">
            <div>
              <button onClick={handleLogout}>Çıkış Yap</button>
            </div>
          </form>
        </div>
      </nav>
      <p>Hoş Geldiniz</p>
    </div>
  );
};

export default Header;