import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Buttons';
import './Navbar.css'

function Navbar() {
   const [click,setClick]=useState(false);
   const[button,setButton]=useState(true);

   const handleClick=()=> setClick(!click);
   const closeMobileMenu=()=>setClick(false);
   
   //showing the tabet and small screen menu button
   const showButton=()=>{
      if(window.innerWidth <=960){
         setButton(false)
      }else{
         setButton(true)
      }
   };
   //to prevent showing up sign-up button when refresh the page
   useEffect(() => {
      showButton();    
   }, []);

   window.addEventListener('resize',showButton);
   return(
       <>
         <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  TRVL <i className="fab fa-typo3"/>
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                 <i className={click?"fas fa-times":"fas fa-align-center"}/>
               </div>
               <ul className={click?'nav-menu active':'nav-menu'}>
                  <li className="nav-item">
                     <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                         Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                         Services
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                         Products
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                         Sign-Up
                     </Link>
                  </li>
               </ul> 
               {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
         </nav>
       </>
    )
}

export default Navbar;
