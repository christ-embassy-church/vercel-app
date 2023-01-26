import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Modal from "react-modal"
import { ImCross } from "@react-icons/all-files/im/ImCross"
import { getRecentMessages } from '../services';
import { useQuery } from '@apollo/client';

export default function RecentMessages() {
  function RecentMessagesComponent(props) {
    Modal.setAppElement('#root')

  const [modalIsOpen, setmodalIsOpen] = useState(false)

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
      
        <button className="message--link" onClick={() => setmodalIsOpen(true)}>
          <div className="hover"><img className="recent--img" src={props.coverImg.url} /></div>
        </button>
    )
  }
  return(
    <div>
      <ModalCard />
      <ShowCard />
    </div>
  )
  }
  
  
  const { data, loading, error } = useQuery(getRecentMessages);

   if (loading) return <h3 className="loader--text">Chargement...</h3>;
    if (error) return <pre>{error.message}</pre>
 return(
  <div className='recents--list'>
    {data.messages.map(message => {
      return (
        <RecentMessagesComponent key={message.id} {...message}/>
      )
    })}
    
  </div>
 )
}