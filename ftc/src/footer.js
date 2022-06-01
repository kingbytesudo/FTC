import React from "react";

function footer()    {
    return(

      <div className="Div-main">

          <div style={bordertop} className="top-border">

          </div >

            <div  style={service} className="service">

                <div style={serviceheading} className="service-heading">
                    <h1>SERVICE TIME</h1>
                </div>

                <div style={servicetimes} className="service-times">
                <p>Sunday School:</p>
                <p>9:30am - 10:00am</p>
                <p>Sunday Service:</p>
              <p>10:15am - 13:00pm</p>
                </div>

            </div>


            <div style={location} className="location">
                <div style={locationheading} className="location-service-address">
                <h1>ADDRESS</h1> 
                </div>

                <div style={locationinfo} className="location-info-center">
                <p>SDA Hall</p>
                <p>41 Canon Street, Kettering</p>
                <p>Northampton,</p>
                <p>NN16 8RD</p>
                </div>
            </div>

            <div style={borderbottom} className="top-border">

          </div >

          <div style={copyright} className="copyright">
          <p>FTC © 2022. ALL RIGHTS RESERVED</p>
        </div>

      </div>

    );
}

const bordertop = {
    height: 1,
    width: "50%",
    opacity: "50%",
    position: 'relative',
    top: "650px",
    left: "25%",
    backgroundColor: "black"

}

const borderbottom = {
    height: 1,
    width: "50%",
    opacity: "50%",
    position: 'relative',
    top: "550px",
    left: "25%",
    backgroundColor: "black"
}

const copyright = {
    position: "relative",
    fontSize: "1vw",
    left: "42%",
    top: "560px",
    fontFamily: "Century Gothic"
}

const servicetimes = {
    position: 'relative',
    fontSize: "1vw",
    top: '690px',
    left: '35%',
    fontFamily: 'Century Gothic',
    width: "20%",
    fontWeight: "200px"
}

const serviceheading = {
    position: 'relative',
    fontSize: "1vw",
    top: '680px',
    left: '35%',
    width: "30%",
    fontFamily: 'Century Gothic',
    
    
}

const service = {
    position: "relative",
    width: "80%"
}

const location = {
    position: "relative",
    width: "80%",
}

const locationheading = {
    position: 'relative',
    fontSize: "1vw",
    top: '460px',
    left: '70%',
    width: "30%",
    fontFamily: 'Century Gothic'
}

const locationinfo = {
    position: 'relative',
    fontSize: "1vw",
    fontFamily: 'Century Gothic'
}

export default footer;