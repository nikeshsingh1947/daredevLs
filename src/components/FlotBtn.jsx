import React from 'react';
import './RegisterButton.css';
import { Link } from "react-router-dom";
const RegisterButton = () => {
  return (
    <button className="floating-register-btn"><Link to={"/signup"}>Register</Link></button>
  );
}

export default RegisterButton;