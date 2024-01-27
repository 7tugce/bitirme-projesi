import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {

   navigate("/")
  
  };
  

  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
         <button onClick={handleLogout}>Çıkış Yap</button>
        </div> 
      </nav>
     
    </div>
  );
};

export default Header;
