import React from "react";
import "./Header.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../globalContext/context";

const Header = () => {
  const { newBack } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  ///////////////////
  return (
    <>
      {newBack && (
        <div className="test">
          <div className="photo"></div>
          <div className="description" style={{margin:"4px"}}>
            <p>
              Hi , my name is Aleksandar and i am Front End Developer / from
              Macedonia with year and half of experience. I am a very passionate
              and enthusiast person, i want to learn new things everyday. I
              started learning programming focusing on the Front End programming
              languages and also i have experience with some Devops segments.
            </p>
          </div>
        </div>
      )}
      {!newBack && (
        <div className="header" data-aos="flip-left">
          <div className="flesh-content"> </div>

          <div className="header-content">
            {" "}
            <h1>Create your Project</h1>
            <h2>for better organization and teams workplace</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
