
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'; 

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    emailOrPhone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    const { emailOrPhone, password } = loginDetails;
    try {
      const response = await axios.post("http://localhost:4000/api/login", { emailOrPhone, password });
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2 className="text-center">Welcome, Login here</h2>
          <input
            type="text"
            placeholder="Email/Phone"
            value={loginDetails.emailOrPhone}
            onChange={(e) => setLoginDetails({ ...loginDetails, emailOrPhone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Not registered? <a href="/registration">Register here</a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
