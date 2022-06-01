import React from "react";
import './App.css'
import Footer from "./footer"
import image from "./background.jpg"
import Headerbar from "./header"
function App() {
  return (

     <div>
        
        <div className="Header-bar">
        <Headerbar/>
        </div>
 
      

      {/* <img src={image} className="background" alt=""/> */}
      
      
       <div className="footer-bar">
        <Footer/>
        </div> 


          {/* <div className="service-times">
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
        </div>  */}
      </div>  

     
  );
}

export default App;
