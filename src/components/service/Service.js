import React from "react";
import Detail from "./Detail";
const Service = () => {
  return (
    <>
      <div className="container-fluid Service_container " style={{ padding: "3rem" }}>
        <section className="Service">
          <div className="row d-flex">
            <div className="col-lg-12 d-flex Service_heading">
              <div className="info_heading col-lg-2 text-end">
                <h2 className="span2" style={{ fontSize: "6vw", margin: "0" }}>
                  our
                </h2>
              </div>
              <div className="col-lg-3">
                <h2
                  className="span1"
                  style={{ fontSize: "6vw", marginLeft: "30px" }}
                >
                  services
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <p
                className="elementer_work"
                style={{ paddingLeft: "padding: 0% 50% 0% 0%;" }}
              >
                Stitching tech stacks To come up with a comprehensive solution
                that transforms your business.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Detail/>
    </>
  );
};

export default Service;
