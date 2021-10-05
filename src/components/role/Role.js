import React,{useState} from "react";
import RoleContainer from "./RoleContainer";
import RoleList from "./RoleList";
const Role = () => {
    const [data, setdata] = useState(RoleList);
    const [sate, setsate] = useState(false);
    const more=()=>{
        setsate(true)
    }
  return (
    <>
      <section className="container" style={{ marginBottom: "5%" }}>
        <div className="row d-flex">
          <div className="usecase_title1 col-lg-12">
            <p className="">Built For Mission-</p>
          </div>
          <div className="usecase_title2 col-lg-12">
            <p>Critical Use Cases</p>
          </div>
        </div>
      </section>
      <section className="container Roles">
      <div className="row d-flex gy-3 mt-5 mb-5">
          <div className=" col-lg-12">
            <h2 className="role_title text-center">By Role</h2>
          </div>
          <div className="our_roles col-lg-12 d-flex justify-content-between">
            <div className="row d-flex flex-column col-lg-4 col-sm-12 gy-4">
              <div className="Rounder_container">
                <h2>CTO</h2>
              </div>
              <div className="Rounder_container">
                <h2>Agency Director</h2>
              </div>
            </div>
            <div className="row d-flex flex-column col-lg-4 col-sm-12 gy-4">
              <div className="Rounder_container">
                <h2>Engineering VP</h2>
              </div>
              <div className="Rounder_container">
                <h2>Design Director</h2>
              </div>
            </div>
            <div className="row d-flex flex-column col-lg-4 col-sm-12 gy-4">
              <div className="Rounder_container">
                <h2>Product Manager</h2>
              </div>
              <div className="Rounder_container">
                <h2>Project Manage</h2>
              </div>
            </div>
          </div>
        </div>
       
        {
           sate ? data.map((cval,ind)=>{return(<><RoleContainer key={ind} {...cval}/></>)}) : null
        }
        <div className="learn_more" style={{display: sate ? "none":"block" }}>
          <h2 className="text-center" onClick={more}>load more</h2>
        </div>
      </section>
    </>
  );
};

export default Role;
