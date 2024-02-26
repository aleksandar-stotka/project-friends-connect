import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/avatar/Avatar";
import { useGlobalContext } from "../../globalContext/context";

export default function Home() {
  const { paragraph } = useGlobalContext();
  const { user } = useAuthContext();
  const { isPending, logout } = useLogout();

 
  return (
    <>
      <div className="h-screen bg-black overflow-hidden">
        {user && (
          <li className="flex items-center space-x-3 p-2">
            {!isPending && (
              <button onClick={logout}
                className="text-white font-bold py-2 px-4 rounded transition-colors"
              >
                
                Logout
              </button>
            )}
            {isPending && (
              <button
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                disabled
              >
                Logging out...
              </button>
            )}
            <div className="flex items-center space-x-3">
              <Avatar src={user.photoURL} className="w-10 h-10" />
              <p className="text-white">
                Hey {user.displayName}
              </p>
            </div>
          </li>
        )}

<div  style={{backgroundImage: 'url(\'earthback.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className="transition-opacity duration-1000 opacity-1 text-center">
    {paragraph ? (
      <h2 className="text-white font-bold text-5xl lg:text-6xl tracking-wide" style={{fontFamily: 'font-mono'}}>
        Empowering Your Vision, Project by Project
      </h2>
    ) : (
      <h2 className="text-blue-200 text-5xl lg:text-6xl font-bold tracking-wide" style={{fontFamily: 'font-mono'}}>
        Elevate Every Task, Achieve Every Goal
      </h2>
    )}
  </div>
</div>

      </div>
    </>
  );
}
