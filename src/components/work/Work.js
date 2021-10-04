import React from "react";
import img from "../../img/Images/Home Page/Image 1.png";
import img2 from "../../img/Images/Home Page/Image 2.png";
const Work = () => {
  return (
    <section className="container-fluid   work" style={{padding:"40px"}}>
      <div className="row col-lg-12 d-flex justify-content-evenly">
        <div className="col-lg-5">
          <div className="title">
            <p className="row">
              <div className="d-flex">
                <span className="span1">We</span>
                <span className="span2">Are</span>
              </div>

              <div className="d-flex">
                <span className="span2">think</span>
              </div>

              <div className="d-flex">
                <span className="span1">gestalt</span>
              </div>
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="img-fluid">
            <img src={img} alt="" style={{width:"100%"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-7 row d-flex">
        <p className="elementer_work">
          We're a group of designers and developers who treats our own company
          as a product. How we work today is the result of a decade of
          iterations on our processes and tools. We work in small teams, using
          the latest tools to create a transparent and collaborative space.
        </p>
      </div>
      <div className="row d-flex work_info" style={{ marginTop: "10%" }}>
        <div className="info_heading col-lg-4 text-end">
          <h2 className="span1" style={{ fontSize: "6vw", margin: "0" }}>
            what we
          </h2>
        </div>
        <div className="col-lg-2">
          <h2 className="span2" style={{ fontSize: "6vw" }}>
            Do
          </h2>
        </div>
      </div>

      <div className="row col-lg-12 d-flex justify-content-evenly align-items-baseline">
        <div className="col-lg-5">
          <div className="img-fluid">
            <img src={img2} alt="" style={{width:"100%"}}/>
          </div>
        </div>
        <div className="col-lg-7 row d-flex">
        <p className="elementer_work">
        We transform organisations from within. We work directly with executives at large organisations to reimagine their future. Together, we define a single Northstar based on business priorities to design better processes, products and services.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Work;
