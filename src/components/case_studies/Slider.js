import React from 'react'
import img1 from "C:/Intership/thinkgestalt/src/img/Images/Case Studies/Case Study 1.png";
import img2 from "C:/Intership/thinkgestalt/src/img/Images/Case Studies/Case Study 2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
    return (
        <>
<div className="container slider-wrap" style={{width:"1147px",marginBottom:"8%"}}>
<Carousel responsive={responsive}  ssr={true}
  infinite={true}  autoPlaySpeed={1000}>
<div className="case_study1">

   <div className="slider_">
   <img src={img1} className="img-thumbnail" alt="" srcset=""  style={{width:"100%"}}/ >
   <div className="Slider_content d-flex flex-column ">
    <div className="col-lg-6">
    <h1 className="slider_title1 text-center">cloud service</h1>
    </div>
    <div className="col-lg-5">
    <h2  className="slider_title2">Cloud based ecommerce and point of sale solutions.</h2>
    </div>
   </div>
   </div>
</div>
<div className="case_study1">

<div className="slider_">
   <img src={img2} className="img-thumbnail" alt="" srcset=""  style={{width:"100%"}}/ >
   <div className="Slider_content d-flex flex-column">
    <div className="col-lg-6">
    <h1 className="slider_title1  text-center">Robotic process automation</h1>
    </div>
    <div className="col-lg-5">
    <h2 className="slider_title2">80% productivity gains in packaging company.</h2>
    </div>
   </div>
   </div>
</div>
 

</Carousel>
</div>
 <div className="service_content container">
 <p>
 <span className="service_span"> With a decade of experience in</span> Web & Software Solutions, <span className="service_span">access to top</span>  tier talent, <span className="service_span"> we</span> fast track <span className="service_span"> the entire process and drive organizational change from within </span>. <span className="service_span">We bring </span> careful planning, alignment, and aggressive execution <span className="service_span">so that you can glimpse</span> the<span className="service_span" style={{textDecoration:"underline"}}> Future today.</span> 
 </p>
 </div>


        </>
    )
}

export default Slider
