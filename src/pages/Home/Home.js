import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Home.css'

export default function Home() {
  const { user } = useAuthContext();
  const globeEl = useRef();
 
   
  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true; // Auto-rotate the globe
    globe.controls().autoRotateSpeed = 0.5; // Adjust rotation speed
    globe.controls().enableZoom = false; // Disable zooming with scroll
  }, []);

  // Define a white color for both land and oceans

  return (
    <div className="h-screen bg-blue overflow-hidden">
       <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white-500 font-bold text-lg pl-5">
          Project Friends Connect
        </div>
      {user && <Sidebar />}
      <div className="relative flex items-center justify-center h-full">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-500 font-bold text-lg pl-5">
          Project Friends Connect
        </div>
      <Globe
      
  ref={globeEl}
  globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // Use a dark-themed globe image
   // Set the background to black or a dark color
  style={{ cursor: 'default' }} // Keep the cursor as default
  // Land and water styling
  polygonAltitude={0.06}
  polygonCapColor={() => 'rgba(255, 255, 255, 0.7)'} // Light color for land
  polygonSideColor={() => 'rgba(0, 0, 0, 0.15)'} // Darker shade for land sides
  polygonStrokeColor={() => '#111'} // Dark color for country borders
  // Lighting and atmosphere
  atmosphereColor="rgba(255, 255, 255, 0.3)" // Light atmosphere
  atmosphereAltitude={0.3}
  // ... other props
/>

        <img src="path/to/your/key-icon.png" alt=""   style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
    </div>
  );
}
