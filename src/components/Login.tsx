import React, { useState } from "react";
import login from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await login(e.target.email.value, e.target.password.value);
      localStorage.setItem("adminToken", data.token);
      console.log(data);
      navigate("/dashboard");
      //   setIsLoggedIn(true);
      //   window.location.href = "/dashboard";
    } catch (error) {
      console.error("Invalid credentials...");
      console.log(error);
    }
  };

  return (
    <div>
      <h2> Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
