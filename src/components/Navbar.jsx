import React from "react";
import Navimage from "../Logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react"

export default function Navbar() {
 const [isNavExpanded, setIsNavExpanded] = useState(false)

 return (
  <div className="nav">
   <nav className="navigation">
    <img className="nav--image" src={Navimage} />
    <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <div className="nav--ul">
          <ul>
            <li>
              <a href="/acceuil">Acceuil</a>
            </li>
            <li>
              <a href="/tous-les-messages">Tous les messages</a>
            </li>
            <li>
             <a href="/catégories">Catégories</a>
            </li>
          </ul>
        </div>
       </div>
   </nav>
   
  </div>
 )
}