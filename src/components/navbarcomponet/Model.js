import React from "react";
 
import Modal from "react-bootstrap/Modal";
 
const Model = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };
  return (
    <div className="container ModelContainer">
      <span onClick={showModal}>Menu</span>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header>
          <Modal.Title>
            <div className="container">
              <span style={{color:"#ffff",paddingRight:"2rem"}} onClick={hideModal} >close</span >
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid p-3">
            <div className="row d-flex p-2">
              <div className="col-12">
                <h2 className="element_heading" style={{paddingLeft:"1rem"}}>
                  Services
                </h2>
              </div>
              <div className="col-lg-12 List_res d-flex">
                <div className="col-lg-6 d-flex flex-column gap-2">
                  <div className="element_button">
                  <a href=""><span>Tailor-Made Apps</span></a>  
                  </div>
                  <div className="element_button">
                   <a href=""> <span>Data Science</span></a>  
                  </div>
                  <div className="element_button">
               <a href=""><span>Cyber Security</span></a>     
                  </div>
                </div>

                <div className="col-lg-6 d-flex flex-column gap-2">
                  <div className="element_button">
                   <a href=""> <span>Robotic Process Automation</span></a> 
                  </div>
                  <div className="element_button">
                 <a href=""> <span>Cloud Services</span></a>   
                  </div>
                  <div className="element_button">
                  <a href=""><span>Website Development</span></a>  
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-3">
              <div className="element_button di1">
               <div className="divider"></div>
                </div>
              </div>
              <div className="col-lg-12">
           
           <h2 className="element_heading  mb-3">Blog</h2>
         </div>
         <div className="element_button di1">
              <div className="divider"></div>
                </div>
              <div className="col-lg-12">
           
                <h2 className="element_heading  mb-3">Contact us</h2>
              </div>
              <div className="col-lg-12 ">
              <div className="element_button di1">
              <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Model;
