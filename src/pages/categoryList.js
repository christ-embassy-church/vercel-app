import React from "react";
import Navbar from "../components/Navbar"
import CategoryCard from "../components/CategoryCard";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function CategoryList() {
 
 const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clclzutuq2nib01uf4j1c9col/master",
    cache: new InMemoryCache()
  });

 return(
  <div>
   <Navbar />
   <div className="category--page">
   <h1 className="recent--title">Catégories</h1>
   <ApolloProvider client={client}>
    <CategoryCard />
   </ApolloProvider>
   </div>
  </div>
 )
}