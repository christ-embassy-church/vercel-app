import React from 'react' 
import filteredData from "./SearchBar"
import MessageCard from './MessageCard';

export default function SearchQuery() {
 return (
  <section className="recent--list">
   <div className="recents--list">
   {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <MessageCard key={key} {...value}/>
            );
          })}
        </div>
      )}
   </div>
  </section>
 )
}