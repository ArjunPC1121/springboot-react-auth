import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

function Signup(){

  const navigate = useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSignup = async () => {

    try{

      const res = await axios.post(
        "http://localhost:8080/auth/signup",
        {name,email,password}
      );

      navigate("/welcome",{state:{name:res.data.name}});

    }catch(err){
      alert("User already exists");
    }

  };

  return(

  <div className="auth-wrapper">

    <div className="auth-container">

      <h1 className="brand-title">WealthWise</h1>

      <h2>Create your investment account</h2>

      <p className="subtitle">
        Start tracking your mutual funds and SIP investments with intelligent portfolio analytics.
      </p>

      <form onSubmit={handleSignup}>

        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit" onClick={()=>navigate("/")}>Signup</button>

      </form>

      <p onClick={()=>navigate("/")}>
        Already have an account? Login
      </p>

    </div>

  </div>

);

}

export default Signup;