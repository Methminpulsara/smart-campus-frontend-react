import Navbar from "./components/Navbar"
import Hero from  './components/Hero'
import Features from "./components/Features "
import './index.css'
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      {/* Landing page */}
      <Route
      path="/"
      element ={
        <div className="min-h-screen">
          <Navbar/>
          <Hero/>
          <Features/>
          <CallToAction/>
          <Footer/>
        </div>
      }
      />
      {/* Loging navigate  */}
      <Route path="/login" element ={<Login/>} />
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
