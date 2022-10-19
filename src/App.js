import { GlobalStyle } from "./Assets/Style/resetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingUp from "./Pages/SingUp/SingUp";
import React from "react";
import TodayPage from "./Pages/Today/TodayPage";


function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<SingUp/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
