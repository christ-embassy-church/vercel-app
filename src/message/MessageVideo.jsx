import React from 'react';
import ReactHlsPlayer from "react-hls-player" 

export default function MessageVideo(props) {
 return (
  <div className="player--container">
     <div className="player">
        <ReactHlsPlayer 
           poster={props.coverImg.url}
           src={props.video}
           controls={true}
        />
        
        <div className='video--details'>
           <img src={props.coverImg.url} className="player--img"/>
           <h1 className="player--sub-text">{props.title}</h1>
        </div>
         <div className="message--details">
            <p className='details--author'>Auteur: {props.preacher}</p>
            <p className='details--description'>{props.description}</p>
            
         </div>
      </div>
   </div>
 )
}