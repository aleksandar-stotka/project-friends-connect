import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/avatar/Avatar";
import { useGlobalContext } from "../../globalContext/context";

export default function Home() {

     
       const {paragraph} = useGlobalContext()

  const { user } = useAuthContext();
  const {isPending,logout} = useLogout()
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true; // Auto-rotate the globe
    globe.controls().autoRotateSpeed = 0.5; // Adjust rotation speed
    globe.controls().enableZoom = false; 
    // Disable zooming with scroll
  
    const textDiv = document.createElement('div');
    textDiv.innerText = 'Your Text Here';
    textDiv.style.position = 'absolute';
    textDiv.style.top = '50%'; // Adjust the vertical position as needed
    textDiv.style.left = '50%'; // Adjust the horizontal position as needed
    textDiv.style.transform = 'translate(-50%, -50%)'; // Center the text
    textDiv.style.backgroundColor = 'transparent'; // Make the background transparent
    textDiv.style.color = 'white'; // Set text color
    textDiv.style.fontSize = '40px'; // Set text size

    // Append the text div to a parent container or the document body
    document.body.appendChild(textDiv); // You can customize the parent container as needed

    // Optionally, you can update the text content based on user interactions or data
    // textDiv.innerText = 'New Text Content';

    // Clean up the text div when the component unmounts
    return () => {
      document.body.removeChild(textDiv);
    };
  }, []);
  

  // Define a white color for both land and oceans

  return (
    <>

      
    
     <div className="h-screen bg-black overflow-hidden=">
     
     
      
      {user && (
          <li className="flex items-center space-x-3 p-2">
          {!isPending && (
            <button
              className=" text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={logout}
            >
              Logout
            </button>
          )}
          {isPending && (
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" disabled>
              Logging out...
            </button>
          )}
          <div className="flex items-center space-x-3">
            <Avatar src={user.photoURL} className="w-10 h-10" />
            <p className="text-white">Hey {user.displayName}</p>
          </div>
        </li>
      )}
       <div className="cursor-pointer "           
>
<div className="transition-opacity duration-1000 opacity-1 flex justify-center p-2"> 
      {paragraph ? (
       
        <h1 className="text-white font-bold text-5xl tracking-wide">test first para</h1>
         
      ) : (
        <h1 className="text-blue-400	text-5xl	font-bold tracking-wide">test secund</h1>

      )}

      </div>
       
      <div className="relative flex items-center justify-center h-full">
     
    <Globe 
      
      ref={globeEl}
      globeImageUrl="/globe.jpg" // Use a dark-themed globe image
      // Land and water styling
      polygonAltitude={0.06}
      polygonCapColor={() => "rgba(255, 255, 255, 0.7)"} // Light color for land
      polygonSideColor={() => "#fffff"} // Darker shade for land sides
      polygonStrokeColor={() => "#ffff"} // Dark color for country borders
      // Lighting and atmosphere
      atmosphereColor="#F5F7F8" // Light atmosphere
      atmosphereAltitude={0.3}
      // ... other props
    />
    
  </div>


       </div>
       
    
    
       
    

</div>
    </>
   
      
  
  );
}
