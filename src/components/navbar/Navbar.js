import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGlobalContext } from "../../globalContext/context";
function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const { newBack } = useGlobalContext();

  useEffect(() => {
    if (logout) {
      // eslint-disable-next-line no-unused-expressions
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <ul>
          <li className="logo">Eclipse </li>

          {!user && !newBack && (
            <>
              <li>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="btn" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
          {user && (
            <li>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out...
                </button>
              )}
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
