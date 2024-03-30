import login from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await login(e.target.email.value, e.target.password.value);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("userDetails", JSON.stringify(data.user));
      // console.log("user details", data.user);
      navigate("/dashboard");
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
        <input id="email" type="email" name="email" required />
        <input id="password" type="password" name="password" required />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
