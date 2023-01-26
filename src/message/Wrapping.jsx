import React from 'react';
import MapWrapper from './MapWrapper';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function Wrapping() {

 const client = new ApolloClient({
       uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clclzutuq2nib01uf4j1c9col/master",
       cache: new InMemoryCache()
     });

 return(
  <div>
   <ApolloProvider client={client}>
    <MapWrapper />
   </ApolloProvider>
   
  </div>
 )
}