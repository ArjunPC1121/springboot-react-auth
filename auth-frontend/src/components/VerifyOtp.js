import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";

function VerifyOtp(){

  const [otp,setOtp] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state.email;

  const handleVerify = async () => {

    await axios.post(
      "http://localhost:8080/auth/verify-otp",
      {email,otp}
    );

    navigate("/reset-password",{state:{email}});

  };

  return(
    <div className="auth-wrapper">
        <div className="auth-container">

        <h1 className="brand-title">Verify Security Code</h1>

            <h2>Enter the OTP sent to your registered email</h2>

            <p className="subtitle">
            This helps us confirm that it's really you accessing your investment account.
            </p>

        <input
            placeholder="Enter OTP"
            onChange={(e)=>setOtp(e.target.value)}
        />

        <button onClick={handleVerify}>
            Verify OTP
        </button>

        </div>
    </div>

  );

}

export default VerifyOtp;