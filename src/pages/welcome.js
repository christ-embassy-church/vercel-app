import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

export default function Welcome() {
 return(
  <div className="welcome-page">
   <Navbar />
   <div className="welcome">
    <Hero />
   </div>
  </div>
 )
}