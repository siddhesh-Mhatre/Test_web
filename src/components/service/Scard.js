import React from "react";

const Scard = ({img,name}) => {
  return (
    <>
      <section className="Elementer_list d-flex align-items-center g-0">
        <div className="Elemter_img">
          <img src={img} alt="" className="Elementor_icon"/>
        </div>
        <div className="Elemter_txt">
          <h2>
            <a href="" className="Elementor_link">{name}</a>
          </h2>
        </div>
      </section>
      <div className="divider" style={{ background: "black",border:"1px solid" , marginBottom:"20px",width:"483px" }} />
    </>
  );
};

export default Scard;
