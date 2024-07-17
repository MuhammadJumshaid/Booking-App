import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Single from "./Pages/Home/Single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import React from "react";



import {

  Route,
  Router,
  Routes,
  BrowserRouter
  
  
} from "react-router-dom";



function App() {
  const user = true;
  // const user = false;
  return (
  <>
      

    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/register" element = {  user ? <Home /> : <Register/>}/>
        <Route path="/login" element = {user ? <Home /> :<Login/>}/>
        <Route path="/write" element = { user ? <Write /> : <Register/>}/>
        <Route path="/settings" element = { user ? <Settings /> : <Register/>}/>Z
        <Route path="/post/:postId"element = {<Single  />}/>
      </Routes>
    </BrowserRouter>



    {/* <BrowserRouter >
    <Topbar />
      <Routes>
      
        <Route exact path="/"> < Home/> </Route>
        
        <Route path="/register" >
        {user ? <Home /> : <Register/>}
          </Route>
        <Route path="/login" > < Login/></Route>
        <Route path="/write" > < Write/> </Route>
        <Route path="/settings" > < Settings/> </Route>
        <Route path="/post/:postId" > <Single/> </Route>
        
      </Routes>
      </BrowserRouter> */}
  
    </>
    
  
  );
}

export default App;
