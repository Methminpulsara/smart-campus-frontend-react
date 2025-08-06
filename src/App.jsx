
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element ={<Home/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/singup" element ={<Signup/>} />
      <Route path='/student/dashboard' element ={<StudentDashboard/>}/>
      

    </Routes>
    </BrowserRouter>
    
  );
}

export default App
