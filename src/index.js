import React from "react"
import ReactDOMClient from 'react-dom/client';
import Welcome from "./pages/welcome"
import Main from "./pages/main"
import AllMessages from "./pages/tous-les-messages"
import PlayerPage from "./pages/message"
import CategoryList from "./pages/categoryList"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage"
import "./css/index.css"
import "./css/slider.css"
import "./css/searchbar.css"

export default function App() {
  
 return (
  
  <BrowserRouter>
  <Routes>
    <Route>
      <Route index element={<Welcome />} />
      <Route path="/acceuil" element={<Main />} />
      <Route path="/tous-les-messages" element={<AllMessages />} />
      <Route path="/message/:messageSlug" element={<PlayerPage /> }  />
      <Route path="/catégories" element={<CategoryList />}/>
      <Route 
       path="catégorie/:categorySlug" 
       element={<CategoryPage />}
       render={props => (<CategoryPage {...props}/>)} 
      />
    </Route>
  </Routes>
</BrowserRouter>

 )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container)
root.render(<App />)