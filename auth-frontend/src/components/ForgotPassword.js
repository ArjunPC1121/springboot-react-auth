import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){

  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {

    await axios.post(
      "http://localhost:8080/auth/forgot-password",
      {email}
    );

    alert("OTP generated. Check database.");

    navigate("/verify-otp",{state:{email}});

  };

  return(

    <div className="auth-container">

      <h1 className="brand-title">Account Recovery</h1>

        <h2>Recover your WealthWise account</h2>

        <p className="subtitle">
        Enter your registered email to generate a secure OTP for password reset.
        </p>

      <input
        placeholder="Enter Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Generate OTP
      </button>

    </div>

  );

}

export default ForgotPassword;