import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();   // prevents page refresh

    try{

      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {email,password}
      );

      navigate("/home",{state:{name:res.data.name}});

    }catch(err){
      alert("Invalid credentials");
    }

  };

  return(

    <div className="auth-wrapper">

      <div className="auth-container">

        <h1 className="brand-title">WealthWise</h1>

        <h2>Sign in to your investment dashboard</h2>

        <form onSubmit={handleLogin}>

          <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

        </form>

        <p onClick={()=>navigate("/forgot-password")}>
          Forgot Password?
        </p>

      </div>

    </div>

  );

}

export default Login;