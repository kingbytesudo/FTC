import React from "react";
import './App.css'
import logo from "./logo.JPG"
import image from "./background.jpg"
function App() {
  return (

     <div>
        <div className="icon-socials">
          <a href="https://www.facebook.com/ftckettering/" target="_blank" rel="noopener noreferrer">
        <ion-icon size="large" Name="logo-facebook"></ion-icon>
        </a>
        </div>
      <div className="buttons-style-right">
        <div className="home-btn">
        <button className="btn">HOME</button>
        </div>

        <div className="about-btn">
        <button className="btn">THE CHURCH</button> 
        </div>
  
        <div className="contact-btn">
        <button className="btn">CONTACT US</button>
        </div>
      
      </div>

      <img src={logo} alt="" className="logo-image"/>

      <img src={image} className="background" alt=""/>
      
      



        <div className="service-times">
          <h1 className="service-font">SERVICE TIME</h1>
          <p>Sunday School:</p>
          <p>9:30am - 10:00am</p>
          <p>Sunday Service:</p>
          <p>10:15am - 13:00pm</p>
        </div>
        <div className="locations-locations">
          <h1 className="service-font">ADDRESS</h1>
          <div className="info-center">
            <p>SDA Hall</p>
            <p>41 Canon Street, Kettering</p>
            <p>Northampton,</p>
            <p>NN16 8RD</p>
            </div>
        </div>
        <div className="line"></div>

        <div className="para-content-center">
          <p>join us every Sunday</p>
        </div>

        <div className="line-border-seperate"></div>

         <div className="copyright">
          <p>FTC © 2022. ALL RIGHTS RESERVED</p>
        </div> 
      </div>

      
  );
}

export default App;
