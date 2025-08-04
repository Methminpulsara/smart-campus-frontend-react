
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Home from './pages/Home';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element ={<Home/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/singup" element ={<Signup/>} />
      

    </Routes>
    </BrowserRouter>
    
  );
}

export default App
