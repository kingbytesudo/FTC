import React from "react";
import {Nav, Navbar, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import logo from "./logo.JPG"
import './App.css'

function Headerbar (){
    return (

        <div className="headerbar-main">

            <div className="Logo-main">
                <img src={logo} alt="" href="App.js" className="logo-image"/>
            </div>

            
            <div style={iconsocials}>
                <a href="https://www.facebook.com/ftckettering/" target="_blank" rel="noopener noreferrer">
                <ion-icon size="large" Name="logo-facebook"></ion-icon>
                </a>
            </div>
            <div style={navbar}>
                <Navbar  expand="lg" >
                <Navbar.Toggle/>
                <Navbar.Collapse>
                
                <Nav>
                
                <Nav.Link style={button} href="App">Home</Nav.Link>
                <Nav.Link style={button} href="thechurch">The Church</Nav.Link>
                <Nav.Link style={button} href="contact">Contact Us</Nav.Link>
                
                </Nav>
                
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

const navbar = {
position: 'relative',
left: "75%",
top: "50px"
}

const button = {
    color: "black",
    fontSize: 25,
}


const iconsocials = {
    position: 'relative',
    left: '65%',
    top: '100px'
}
export default Headerbar;