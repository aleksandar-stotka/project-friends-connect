import { useState, useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg"
        data-aos="flip-left"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
        <label className="block mb-4">
          <span className="text-gray-300">Email:</span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300">Password:</span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300">Display Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300">Profile Thumbnail:</span>
          <input
            required
            type="file"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
          />
          {thumbnailError && <div className="text-red-500 mt-2">{thumbnailError}</div>}
        </label>
        {!isPending && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
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

export default Signup;
