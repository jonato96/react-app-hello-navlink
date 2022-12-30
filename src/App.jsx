import Navbar from "./components/Navbar";
import './App.css';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Foooter from "./components/Foooter";

export const App = () =>{

  const info = {
    nombre: "Jonathan",
    apellido: "Sanchez",
    edad: 26
  }
  const footerInfo = {
    name: "Jonathan",
    contact: "0999999999",
    mail: "kruger.com"
  }

  const cardInfo={
    // image: "https://i.pinimg.com/originals/e6/e5/e1/e6e5e185c3be2ef5d22f6b01bf34f1cd.jpg",
    name: "La vaca lola",
    description: "Tiene cabeza y tiene cola",
    hasChild: "No"
  }

  const handleClick = ()=>{
    console.log("Click")
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