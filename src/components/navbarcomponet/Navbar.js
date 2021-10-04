import React from "react";
import Model from "./Model";
import think from "../../img/think.png";
const Navbar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center main_page">
        <div
          className="col-12 row justify-content-between align-items-center"
          style={{ height: "150px" }}
        >
          <div className="barndimg col-lg-5">
            <img src={think} alt="" srcset="" className="brandIMG" />
          </div>

          <div className="menu col-lg-5  ">
            <div className="text-end">
              <Model />
            </div>
          </div>
        </div>

        <div className="col-12 " style={{paddingTop:"3rem"}}>
          <div className="element_heading text-center">
            <h2 style={{marginBottom:"0",color:"#000000"}}><i> Is Your Enterprise</i></h2>
          </div>
        </div>

        <div className="col-12">
          <div className="text-center">
            <h2  style={{fontWeight:"600",fontSize:"9vw",color:"#0A0A0A"}} className="Second_head">  Future Ready? </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
