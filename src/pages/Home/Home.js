import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/avatar/Avatar";
import { useGlobalContext } from "../../globalContext/context";

export default function Home() {
  const { paragraph } = useGlobalContext();
  const { user } = useAuthContext();
  const { isPending, logout } = useLogout();

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('earthback.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* User Info Bar */}
        {user && (
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mx-auto mt-6 bg-black/60 rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-3">
              <Avatar src={user.photoURL} className="w-12 h-12 border-2 border-blue-400 rounded-full" />
              <p className="text-white text-lg font-semibold">
                Hey {user.displayName}
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              {!isPending ? (
                <button
                  onClick={logout}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl transition-colors shadow"
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-xl shadow"
                  disabled
                >
                  Logging out...
                </button>
              )}
            </div>
          </div>
        )}

        {/* Main Heading */}
        <div className="flex flex-1 items-center justify-center w-full">
          <div className="transition-opacity duration-1000 opacity-1 text-center max-w-3xl mx-auto mt-16 sm:mt-24">
            {paragraph ? (
              <h2 className="text-white font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide font-mono drop-shadow-lg">
                Empowering Your Vision, Project by Project
              </h2>
            ) : (
              <h2 className="text-blue-200 font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide font-mono drop-shadow-lg">
                Elevate Every Task, Achieve Every Goal
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}