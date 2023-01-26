import React from "react"
import ReactHlsPlayer from "react-hls-player" 

export default function MessageAudio(props) {
 return (
   <div className="audio--container">
     <div className="audio">
       <div className="audio--text">
         <div className="audio--img">
          <img className="audio--image" src={props.coverImg.url} />
         </div>
         <h1 className="audio--title">{props.title}</h1>
         <h2 className="audio--preacher">{props.preacher}</h2>
       </div>
      <ReactHlsPlayer src={props.video} controls={true}  /> 
     </div>
   </div>
 )
}