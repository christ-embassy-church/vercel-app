import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import Wrapping from '../message/Wrapping';

export default function PlayerPage() {
  const { messageSlug } = useParams()

 return(
  <div className="message--page">
    <Wrapping />
    <Navbar />

  </div>  
 )
}
 
 
