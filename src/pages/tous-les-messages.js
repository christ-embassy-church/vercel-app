import React, { useState, useEffect } from "react";
import All from "../components/All"
import Navbar from "../components/Navbar";
import MessageCard from "../components/MessageCard";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { MESSAGE_QUERY } from "../services";

export default function Messages() {



 const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clclzutuq2nib01uf4j1c9col/master",
  cache: new InMemoryCache()
});

 
 return (
  <div>
   <Navbar />
   <All />
   <section className="recent--list">
    <div className="recents--list">
      <ApolloProvider client={client}>
     
       <MessageCard/>
     </ApolloProvider>
     <ejs-sidebar id="default-sidebar" created="onCreated"></ejs-sidebar>
    </div>
   </section>
  </div>
 )
}