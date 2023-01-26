import React from "react"
import Navbar from "../components/Navbar";
import MainMessage from "../components/MainMessage";
import { Link } from "react-router-dom";
import RecentMessages from "../components/RecentMessages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import MainCategoryCard from "../components/MainCategoryCard";

export default function Main() {

  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clclzutuq2nib01uf4j1c9col/master",
    cache: new InMemoryCache()
  });

  function Show() {
    return(
      <section className="recent--list">
        <div className="recents--list">
        <ApolloProvider client={client}>
          <RecentMessages />
        </ApolloProvider>
          
        <ejs-sidebar id="default-sidebar" created="onCreated"></ejs-sidebar>
        </div>
      </section>
    )
  }

 

 return (
    <div>
      <div>
          <div className="main--page">
            <Navbar />

            <div className="main--container">

              <div>
                <div className="recent--button--title">
                  <h1 className="recent--title">Messages récents</h1>
                </div>
                <Show />
                <hr className="hr-main"></hr>
                <div className="recent--button--title">
                  <h1 className="recent--title">Tous les messages</h1>
                </div>
                <ApolloProvider client={client}>
                  <MainMessage />
                </ApolloProvider>
              </div>
              <ApolloProvider client={client}>
                <MainCategoryCard />
              </ApolloProvider>
              
            </div>
            
          </div>
      </div>
    </div>
 )
 
}
