import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/avatar/Avatar";
import { useGlobalContext } from "../../globalContext/context";

export default function Home() {
  const { paragraph } = useGlobalContext();
  const { user } = useAuthContext();
  const { isPending, logout } = useLogout();
  const globeEl = useRef();

  useEffect(() => {
    // Existing useEffect code remains unchanged
  }, []);

  return (
    <>
      <div className="h-screen bg-black overflow-hidden">
        {user && (
          <li className="flex items-center space-x-3 p-2">
            {!isPending && (
              <button
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

        <div className="cursor-pointer">
          <div className="transition-opacity duration-1000 opacity-1 flex justify-center p-2">
            {paragraph ? (
              <h2 className="text-white font-bold text-5xl lg:text-3xl tracking-wide">
                Empowering Your Vision, Project by Project
              </h2>
            ) : (
              <h2 className="text-blue-200 text-5xl lg:text-3xl font-bold tracking-wide">
                Elevate Every Task, Achieve Every Goal
              </h2>
            )}
          </div>

          <div className="relative flex items-center justify-center h-full">
            <Globe
              ref={globeEl}
              globeImageUrl="/globe.jpg"
              polygonAltitude={0.06}
              polygonCapColor={() => "rgba(255, 255, 255, 0.7)"}
              polygonSideColor={() => "#fffff"}
              polygonStrokeColor={() => "#ffff"}
              atmosphereColor="#F5F7F8"
              atmosphereAltitude={0.3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
