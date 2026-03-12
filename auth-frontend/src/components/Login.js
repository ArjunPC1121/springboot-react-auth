import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    try{

      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {email,password}
      );

      navigate("/welcome",{state:{name:res.data.name}});

    }catch(err){
      alert("Invalid credentials");
    }

  };

  return(

    <div className="auth-container">

      <h2>Welcome Back</h2>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p onClick={()=>navigate("/signup")}>
        Create Account
      </p>

    </div>

  );

}

export default Login;