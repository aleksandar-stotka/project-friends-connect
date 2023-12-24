import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGlobalContext } from "../../globalContext/context";
import { FaUsers, FaUsersCog } from "react-icons/fa";
import Avatar from "../avatar/Avatar";
function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const { newBack } = useGlobalContext();

  return (
    <>
      <nav className=" ">
        <ul className="align-element justify-between  	  flex  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 gap-x-3">
          <div>
            <FaUsersCog className="w-10 h-12" />
          </div>

          <div>
            {!user && !newBack && (
              <>
                <li>
                  <Link
                    className="bg-cyan-600	 hover:bg-cyan-300  font-bold py-2 px-4 rounded "
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-cyan-600	 hover:bg-cyan-300  font-bold py-2 px-4 rounded "
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}

            {user && (
              <li>
                {!isPending && (
                  <button
                    className="bg-blue-500  text-white  font-bold py-2 px-4 rounded"
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
                {isPending && (
                  <button className="btn" disabled>
                    Logging out...
                  </button>
                )}
                <div className="p-5 flex mx-5">
                  <Avatar src={user.photoURL} />
                  <p className="p-5 text-black">Hey {user.displayName}</p>
                </div>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
