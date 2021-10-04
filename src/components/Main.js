import React from 'react'
import Navbar from "./navbarcomponet/Navbar";
import Work from './work/Work'; 
import Service from './service/Service';
const Main = () => {
    return (
      <>
      <div className="container-fluid main">
      <Navbar/>
      </div>

      <div className="container-fluid" style={{marginTop:"5%"}}>
     <Work/>
      </div>

      <div className="Over_services" style={{marginTop:"10%"}}>
  <Service/>
      </div>
      </>
    )
}

export default Main
