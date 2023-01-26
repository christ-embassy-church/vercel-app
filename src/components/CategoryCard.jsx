import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getCategories } from "../services";

export default function CategoryCard() {

  function Wrapping(props) {
  
   return(
      <div className="category--card--list" key={props.id}>
    <img src={props.categoryCover.url} className="category--image"/>
    <h1 className="category--name">{props.name}</h1>
    <Link className="category--link" to={`/catégorie/${props.categorySlug}`}>
     <h1 className="category--link--text">Voir les messages de cette catégorie</h1>
    </Link>
   </div>
   )
  }

   const { data, loading, error } = useQuery(getCategories);
   if (loading) return <h3 className="loader--text">Chargement...</h3>;
  if (error) return <pre>{error.message}</pre>
   return(
    <div className="category--list--page">
      {data.categories.map(category => {
          return(
              <Wrapping key={category.id} {...category}/>
          )
          
      })}
     
    </div>
   )
}

