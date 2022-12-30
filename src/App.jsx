import Navbar from "./components/Navbar";
import './App.css';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Foooter from "./components/Foooter";

export const App = () =>{  
  const footerInfo = {
    name: "Jonathan",
    contact: "0999999999",
    mail: "kruger.com"
  }  
  
  return(
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Foooter info={footerInfo}/>
      </Router>
    </div>
  )
}