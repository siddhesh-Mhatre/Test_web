import React from "react";
import Slider from "./Slider";
const Case_study = () => {
  return (
    <>
      <section className="container" style={{marginTop:"15%",marginBottom:"5%"}}>
        <div className="row d-flex">
          <div className="col-lg-12 d-flex Service_heading">
            <div className="info_heading col-lg-2 text-end">
              <h2 className="span2" style={{ fontSize: "6vw", margin: "0" }}>
               case
              </h2>
            </div> 
            <div className="col-lg-3">
              <h2
                className="span1"
                style={{ fontSize: "6vw", marginLeft: "30px" }}
              >
              Studies
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Slider/>
    </>
  );
};

export default Case_study;
