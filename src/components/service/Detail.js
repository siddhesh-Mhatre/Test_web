import React,{useState} from "react";
import img from "../../img/Images/Home Page/Image 3.png";
import Scard from "./Scard";
import Sdata from "./Sdata";
const Detail = () => {
  const [data, setdata] = useState(Sdata);
  return (
    <>
      <section className="container-fluid" style={{padding:"0% 0% 0% 4%"}}>
        <div className="row d-flex justify-content-between">
          <div className="col-lg-5 Item_container ">
            <div className="d-flex flex-column gap-3 item_Box" style={{margin:"0% 0% 0% 10%"}}>
                   {
                     data.map((cval)=>{
                       return (
                         <>
                         <Scard key={cval.id} {...cval} />
                         </>
                       )
                     })
                   }
            </div>
          </div>
          <div className="col-lg-7 col-12 text-end p-0">
            <img src={img} alt="" srcset="" style={{width:"75%"}}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
