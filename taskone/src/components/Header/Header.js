import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';

function Header() {

  const [isNavOpen,setNavOpen]=useState(false);
  const toggleNavbar=()=>{
    setNavOpen(!isNavOpen);
    console.log("isNavOpen:", isNavOpen);

  }

  return (
    <> 
    <div className="bg-style header-elements">
    <div className="header-style">Slite</div>
    <div className={`menu-bar ${isNavOpen ? 'open' : ''}`} >
  
    <NavLink to="/product" className="link-style">Product</NavLink>  
    <NavLink to="/template" className="link-style">Template</NavLink>  
    <NavLink to="/pricing" className="link-style">Pricing</NavLink>  
    <NavLink to="/blog" className="link-style">Blog</NavLink>  
    <span className="link-style">Sign in</span>
    <button className="btn-transparent">Request a demo</button>
    <button className="button-color"> Start for free</button>
    </div>    
    <button className="navbar-toggle" onClick={toggleNavbar}>☰ </button>
    </div>
    </>
  );
}

export default Header;
