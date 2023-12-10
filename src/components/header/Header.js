import React from "react";
import "./Header.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  ///////////////////
  return (
    <>
     
    
        <div  data-aos="flip-left">
          <div className="flesh-content"> </div>

          <div className="header-content">
            {" "}
            <h1 className="text-green-950 font-bold	text-5xl p-5">Create your Project</h1>
            <h2 className="">for better organization and teams workplace </h2>
          </div>
        </div>
    </>
  );
};

export default Header;
