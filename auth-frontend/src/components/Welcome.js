import { useLocation } from "react-router-dom";
import "../styles/auth.css";

function Welcome(){

  const location = useLocation();
  const name = location.state?.name;

  return(

    <div className="welcome-container">

      <h1>Hello {name} !</h1>

      <p>You have successfully logged in.</p>

    </div>

  );

}

export default Welcome;