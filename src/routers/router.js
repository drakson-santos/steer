import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginComponent from "../pages/login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { LoginComponent }  path="/" exact />
           <Route component = { HomePage }  path="/home" exact />
       </BrowserRouter>
   )
}

export default Routes;