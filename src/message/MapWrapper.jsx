import React from 'react';
import MessageAudio from "./MessageAudio"
import MessageVideo from './MessageVideo';
import UpNext from "./UpNext"
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import MessageDetails from './MessageDetails';

export default function MapWrapper() {
 const { messageSlug } = useParams()
 const getMessageDetails = gql`
  query MyQuery ($messageSlug : String!) {
    messages(where: {messageSlug_contains: $messageSlug}) {
      coverImg {
        url
      }
      title
      preacher
      messageSlug
      video
      format
      description
      
    }
  }

`;


  const { data, loading, error } = useQuery(getMessageDetails, {variables: {messageSlug: messageSlug}});

  

  if (loading) return <h3 className="loader--text">Chargement...</h3>;
  if (error) return <pre>{error.message}</pre>

  function Map() {
   return(
    <div>
     {data.messages.map(message => {
      const video = message.format === "Video"
      const audio = message.format === "Audio"
      return (
       <div>
        <div className="wrapper">{audio && <MessageAudio key={message.id} {...message} />}</div>
        <div className="page--wrapper">{video && <div><MessageVideo key={message.id} {...message} /></div>}</div>
        
       </div>
      )
     })}
     
    </div>
   )
 }
 return(
  <div className='Wrapping'>
    <Map />
  </div>
 )
}