import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";

import { useParams } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import VieChretienne from "../categories/VieChretienne";
import Evangelisation from "../categories/Evangelisation";
import SaintEsprit from "../categories/SaintEsprit";
import GuerisonEtSante from "../categories/GuérisonEtSanté";
import Foi from "../categories/Foi";
import CroissanceDeglise from "../categories/CroissanceDeglise";
import ProsperiteEtFinance from "../categories/ProspéritéEtFinance"
import Priere from "../categories/Prière"
import GainDames from "../categories/GainDames";

export default function CategoryPage() {

   const { categorySlug } = useParams()
   const evangelisation = categorySlug  === "evangelisation"
   const viechretienne = categorySlug  === "vie-chretienne"
   const guerisonEtSante = categorySlug === "guerison-et-sante"
   const saintEsprit = categorySlug === "saint-esprit"
   const foi = categorySlug === "foi"
   const croissanceDeglise = categorySlug === "croissance-deglise"
   const prosperiteEtFinance = categorySlug === "prosperite-et-finance"
   const priere = categorySlug === "priere"
   const gainDames = categorySlug === "gain-dames"

   const client = new ApolloClient({
      uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clclzutuq2nib01uf4j1c9col/master",
      cache: new InMemoryCache()
    });
   
    
 return(
   <div>
      <Navbar />
         <div>
            <section className="all--list">
               <div className="alls--list">
                  <ApolloProvider client={client}>
                     {evangelisation && <Evangelisation />}
                     {viechretienne && <VieChretienne />}
                     {guerisonEtSante && <GuerisonEtSante />}
                     {saintEsprit && <SaintEsprit />}
                     {foi && <Foi />}
                     {croissanceDeglise && <CroissanceDeglise />}
                     {prosperiteEtFinance && <ProsperiteEtFinance />}
                     {priere && <Priere />}
                     {gainDames && <GainDames />}
                  </ApolloProvider>
               </div>
            </section>
         </div>
   </div>
 )
}