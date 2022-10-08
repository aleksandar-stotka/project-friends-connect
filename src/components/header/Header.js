import React from 'react'
import './Header.css'
import "aos/dist/aos.css";
import Aos from "aos";
import {useState, useEffect} from 'react'
import "aos/dist/aos.css"


const Header = () => {
  const [newBack, setNewBack] = useState(true)
 
  const newBackground = async () => {
    try {
      setTimeout(() => {
        setNewBack(false);
        console.log('set')
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };;
  
  useEffect(() => {
    newBackground()
    Aos.init({ duration: 2500 });
  
},[newBack])

///////////////////
  return <>
  {newBack && <div className="test">
        test
    </div>}
    {!newBack && <div className="header" data-aos="flip-left" >
    <div className="flesh-content"> </div>
    <div className="header-content"> <h1 >Create your Project</h1></div>
      
     
      
    </div>}
      
 
     

     
        
  </>
  
 


   
  
}

export default Header