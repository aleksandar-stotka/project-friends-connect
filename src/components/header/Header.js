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
     
    
        <div className="header" data-aos="flip-left">
          <div className="flesh-content"> </div>

          <div className="header-content">
            {" "}
            <h1>Create your Project</h1>
            <h2>for better organization and teams workplace </h2>
          </div>
        </div>
    </>
  );
};

export default Header;
