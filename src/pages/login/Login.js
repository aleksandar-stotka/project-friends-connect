import "./Login.css";
import { useState } from "react";
import { useEffect } from "react";
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
    Aos.init({ duration: 2500 });
  }, []);
  
  return (

      <div className='form-container' style={{display:'flex', justifyContent:'center',width:'100%'}}>
      <form className="auth-form" onSubmit={handleSubmit} style={{width: '40rem',height:'30rem'}}    data-aos="flip-left">
        <h2>Login</h2>
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

        {!isPending && <button className="btn">Login</button>}
        {isPending && (
          <button className="btn" disabled>
            loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
      </div>
      

  );
}

export default Login;
