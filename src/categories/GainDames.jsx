import React, { useEffect, useState } from "react";
import {Router, Link } from "react-router-dom";
import Modal from "react-modal"
import { ImCross } from "@react-icons/all-files/im/ImCross"
import { useQuery } from "@apollo/client";
import { getCategoryGainDames } from "../services";

export default function GainDames() {

  function GainDamesCard(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
  Modal.setAppElement('#root')
  
  
  function ModalCard() {
    const video = props.format === "Video"

    let modalSee
    if (video) {
      modalSee = "voir le message"
    } else {
      modalSee = "écouter le message"
    }
    return(
      <>
      <Modal 
       isOpen={modalIsOpen} 
       style={
        {
          overlay: {
            backgroundColor: '#00000096'
          },
          
        }
       }
      >
      
          <div className="modal">
            <button className="modal--icon" onClick={() => setmodalIsOpen(false)}>
              <ImCross />
            </button>
            <div className="modal--modal">
          <img className="modal--image" src={props.coverImg.url}/>
          <a>
            <Link className="modal--see" to={`/message/${props.messageSlug}`}><span>{modalSee}</span></Link>
          </a>
          </div>
          <h2 className="modal--title">{props.title} {props.part}</h2>
          <h2 className="modal--preacher">{props.preacher}</h2>
          <hr></hr>
          <p className="modal--desc">{props.description}</p>
          <div>
          </div>  
          </div>
        </Modal>
      </>
    )
  }
  function ShowCard() {
    return(
      
      <div className="all--message">
        <button className="message--link" onClick={() => setmodalIsOpen(true)}>
          <div className="hover"><img className="recent--img" src={props.coverImg.url} /></div>
        </button> 
      </div>
    )
   }

   return (
    <div>
      <ModalCard />
      <ShowCard />
    </div>
   )
  }

    const { data, loading, error } = useQuery(getCategoryGainDames);

   if (loading) return <h3 className="loader--text">Chargement...</h3>;
    if (error) return <pre>{error.message}</pre>

 return(
  <div>
   <div className="category--page">
            <h1 className="recent--title">Catégorie : Gain d'âmes</h1>
        </div>
     <div className="alls-list">
         {data.messages.map((message) => {
            return <GainDamesCard key={message.id} {...message}/>
         })}  
      </div>
  </div>
 )
}