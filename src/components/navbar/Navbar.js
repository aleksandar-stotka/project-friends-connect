import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGlobalContext } from "../../globalContext/context";
import Avatar from "../avatar/Avatar";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const { newBack } = useGlobalContext();

  

  return (
    <>
      <nav  >
      
        <ul  className='align-element p-5 	 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 gap-x-3'>
        

          {!user && !newBack && (
            <>
              <li>
                <Link className="bg-cyan-600	 hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded " to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="bg-cyan-600	 hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded " to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
          {user && (
            <li>
              {!isPending && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out...
                </button>
              )}
              <div className="p-5 flex mx-5" >
              <Avatar src={user.photoURL} />
          <p className="p-5">Hey {user.displayName}</p>
        </div>
            </li>
          )}
              <Sidebar/>
                  

        </ul>

       
      </nav>
    </>
  );
}

export default Navbar;
