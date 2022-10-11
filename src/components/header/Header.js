import React from 'react'
import './Header.css'
import "aos/dist/aos.css";
import Aos from "aos";
import {useState, useEffect} from 'react'
import "aos/dist/aos.css"
import { useGlobalContext } from '../../globalContext/context';


const Header = () => {
  
  const {newBack} =useGlobalContext()
 
 
  useEffect(() => {
   
    Aos.init({ duration: 2500 });
  
},[])

///////////////////
  return <>
  {newBack && <div className="test">
         <div className='photo' >
          photo
         </div>
         <div className='description'>
          description
         </div>
       

    </div>}
    {!newBack && <div className="header" data-aos="flip-left" >
    <div className="flesh-content"> </div>
    
    <div className="header-content"> <h1 >Create your Project</h1></div>
      
     
      
    </div>}
      
 
     

     
        
  </>
  
 


   
  
}

export default Header