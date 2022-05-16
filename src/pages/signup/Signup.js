import "./Signup.css";
import { useState } from "react";
import React from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    ///first reset
    setThumbnail(null); ///first null than we see waht user select on this event(e)
    let selected = e.target.files[0];
    console.log(selected); ///files return array on files

    if (!selected) {
      setThumbnailError("please select file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("image file size must be less than 100kn");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbail update");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sing up</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <label>
        <span>profile thumbnail</span>
        <input required type="file" onChange={handleFileChange} />
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}

export default Signup;
