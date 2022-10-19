import { GlobalStyle } from "./Assets/Style/resetCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingUp from "./Pages/SingUp/SingUp";


function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<SingUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
