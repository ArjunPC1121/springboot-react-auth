import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";

function ResetPassword(){

  const [password,setPassword] = useState("");

  const location = useLocation();

  const email = location.state.email;

  const navigate = useNavigate();

  const handleReset = async () => {

    await axios.post(
      "http://localhost:8080/auth/reset-password",
      {email,newPassword:password}
    );

    alert("Password reset successful");

    navigate("/");

  };

  return(
    <div className="auth-wrapper">
        <div className="auth-container">

        <h1 className="brand-title">Reset Your Password</h1>

            <p className="subtitle">
            Create a new password to secure your WealthWise portfolio access.
            </p>

        <input
            type="password"
            placeholder="New Password"
            onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleReset}>
            Reset Password
        </button>

        </div>
    </div>

  );

}

export default ResetPassword;