
import React from "react";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Hotel from "./Pages/hotel/Hotel";

import {

  Route,
  Router,
  Routes,
  BrowserRouter
  
  
} from "react-router-dom";




function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>}></Route> 
    <Route path="/list" element = {<List/>}></Route> 
    <Route path="/hotel/:id" element = {<Hotel/>}></Route> 
  </Routes>  
    </BrowserRouter>
    
  
  );
}

export default App;
