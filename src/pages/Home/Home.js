import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaHandRock } from "react-icons/fa";


export default function Home() {
  const { user } = useAuthContext();
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
    
     <div className="h-screen bg-blue overflow-hidden=">
      
    
       <button className="cursor-pointer "           
>
       
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


       </button>
    
    
       
    

</div>
    </>
   
      
  
  );
}
