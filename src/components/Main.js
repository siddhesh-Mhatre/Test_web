import React from 'react'
import Navbar from "./navbarcomponet/Navbar";
import Work from './work/Work'; 
import Service from './service/Service';
import Case_study from './case_studies/Case_study';
import Role from './role/Role';
import Form from './Form/Form';
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

      <div className="caseStudy">
<Case_study/>
      </div>

      <div className="UseCase" style={{marginTop:"15%"}}>
   <Role/>
      </div>

      <div className="Form" style={{marginTop:"10%",marginBottom:"5%"}}> 
      <Form/>
      </div>
      </>
    )
}

export default Main
