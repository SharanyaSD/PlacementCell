import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "../index.css";
import storage from "../utilities/storage";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await login(e.target.email.value, e.target.password.value);

      // localStorage.setItem("adminToken", data.token);
      console.log(data.user.role_id);
      storage.setRole(data.user.role_id);
      // localStorage.setItem("userDetails", JSON.stringify(data.user));
      storage.setToken(data.token);
      console.log("data", data);

      console.log("token", data.token);

      // console.log("user details", data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Invalid credentials...");
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4 py-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
