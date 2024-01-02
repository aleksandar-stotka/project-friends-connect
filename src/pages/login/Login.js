import { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, "login");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 p-6">
      <form
        className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        data-aos="flip-left"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <label className="block mb-4">
          <span className="text-gray-300">Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300">Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
        </label>

        {!isPending && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        )}
        {isPending && (
          <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
            Loading...
          </button>
        )}
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
