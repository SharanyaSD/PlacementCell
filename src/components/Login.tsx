import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "../index.css";
import storage from "../utilities/storage";
import home from "../assets/images/placement3.png";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await login(e.target.email.value, e.target.password.value);

      // localStorage.setItem("adminToken", data.token);
      console.log(data.user.role_id);
      storage.setRole(data.user.role_id);
      storage.setUser(data.user.id);
      // localStorage.setItem("userDetails", JSON.stringify(data.user));
      storage.setToken(data.token);
      toast("Logged in Successfully");
      console.log("data", data);

      console.log("token", data.token);

      // console.log("user details", data.user);
      navigate("/dashboard");
    } catch (error) {
      toast("User not identified");
      console.error("Invalid credentials...");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #F0FFFF, #FFFFFF)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div className="max-w-md mt-top:11rem mx-auto mt-20 px-20 py-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center"
        >
          {" "}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 justify-center"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
      <div className="mt-10rem h-27rem flex justify-center">
        <img src={home} alt="Home" className="h-full mt-20rem" />
      </div>
    </div>
  );
};

export default Login;
