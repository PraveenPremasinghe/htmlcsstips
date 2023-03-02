import "./App.css";
import NavBar from "./Layouts/Header";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home  from "./Pages/Home";
import Headers from "./Layouts/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/Styles/MainCss.css";



function App() {
  return (
    <>
      
  
        <Headers/>
        <Home />

     
  </>
  );
}

export default App;
