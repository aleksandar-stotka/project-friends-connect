import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGlobalContext } from "../../globalContext/context";
function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const { newBack } = useGlobalContext();

  

  return (
    <>
      <div className="navbar">
        <ul>
          <li className="logo">
            Eclipse{" "}
            <img src="https://img.freepik.com/free-vector/call-center-background-flat-style_23-2147954908.jpg?t=st=1668070161~exp=1668070761~hmac=70abdaa198e99b3d657216acec64ce6d80bfb535a153a465ee91bc9b2958662e" alt="img" />{" "}
          </li>

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
