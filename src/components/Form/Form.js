import React from 'react'
import img from "C:/Intership/thinkgestalt/src/img/Images/Home Page/Image 4.png";
const Form = () => {
    return (
        <>
            <section className="container">
                  <div className="form_Head">
                      <h1>
                     <span className="span1" style={{fontSize:"4.6vw"}}>Let’s talk.</span> <span className="span2" style={{fontSize:"4.6vw"}} > Just enter your details and we will reply within 24 hours</span>
                      </h1>
                  </div>
            </section>
            <section className="container Form_content">
                <div className="row d-flex">
                   <div className="col-lg-6">
                       <img src={img} className="img-fluid" alt="" srcset="" />
                   </div>
                   <div className="col-lg-6">
                   <form action="">
                    <div className="row d-flex">
                    <div className="col-lg-12 row d-flex">
                          <div className="col-lg-6"  style={{marginBottom:"43px"}}>
                             <input type="text" name="name" className="form_controls" placeholder="name" />
                          </div>
                          <div className="col-lg-6"  style={{marginBottom:"43px"}}>
                             <input type="text" name="phone"  className="form_controls" placeholder="phone" />
                          </div>
                    </div>
                    <div className="col-lg-12" style={{marginBottom:"43px"}}> 
                       <input type="email"  className="form_controls" placeholder="email"  />
                     </div>
                    <div className="col-lg-12" style={{marginBottom:"43px"}}>
                      <label htmlFor="text" className=" lable_ col-lg-12">How can we help you?</label>
                      <textarea name="" id="" cols="30" rows="4" className="form_text col-lg-12 " style={{width:"100%"}}></textarea>
                    </div>
                    <div className="col-lg-12 btn_res text-end">
                           <input type="button" className="form_btn" value="Submit" />
                    </div>
                    </div>
                   </form>
                   </div>
                </div>
            </section>
        </>
    )
}

export default Form
