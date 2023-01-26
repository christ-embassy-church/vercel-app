import React from 'react'
import Cover from "../Full Page.png"
import PhoneCover from "../Phone.png"
import TabletCover from "../Tablet.png"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Hero() {
 return(
  <div>
   <div className="hero--cover--wrapper">
    <img className="hero--cover" src={Cover} />
   </div>
   
   <img className="hero--cover--phone" src={PhoneCover} />
   <img className="hero--cover--tablet" src={TabletCover} />
   <div className="external--page">
    <Link to="main">
     <FaExternalLinkAlt/>
    </Link>
   </div>
   <a href="/acceuil">
    <h2 className="continue">Continuez vers les messages</h2>
   </a>
   
  </div>
 )
}