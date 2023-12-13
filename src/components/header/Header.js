import React from "react";
import "./Header.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  ///////////////////
  return (
    <>
     
    
        <div  data-aos="flip-left">
         

          <div className="bg-cyan-500 w-full h-96 p-5 items-center text-center flex flex-col justify-center">
            {" "}
            <h1 className="text-green-950 font-bold	text-5xl p-">Create your Project</h1>
            <h2 className="">for better organization and teams workplace </h2>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 p-2 px-4 rounded " to="/home">get started</Link>
          </div>
        </div>
    </>
  );
};

export default Header;
