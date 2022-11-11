import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginComponent from "../pages/login";

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element={<LoginComponent />}  path="/" exact />
            <Route element={<HomePage />}  path="/home" exact />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;