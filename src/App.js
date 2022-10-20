import { GlobalStyle } from "./Assets/Style/resetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingUp from "./Pages/SingUp/SingUp";
import React from "react";
import TodayPage from "./Pages/Hoje/TodayPage";
import Historico from "./Pages/Historico/Historico";
import Habitos from "./Pages/Habitos/Habitos";


function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<SingUp/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/historico" element={<Historico/>}/>
        <Route path="/habitos" element={<Habitos/>}/>
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
