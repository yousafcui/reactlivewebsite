import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Images/img1.png";


const Common=(props)=> {
  return (
    <>
     <section id="header" className="d-flex align-item-center">
    <div className="container-fluid ">
        <div className="row">
           <div className="col-12 max-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>
                       {props.name} <strong className="brand-name">M Yousaf</strong>
                      <h2 className="my-2">
                       We are the team of talented develpers making websites
                      </h2>
                      </h1>
                        <div className="mt-3">
                         <NavLink className="btn-get-started" to={props.visit}> {props.btname}</NavLink>
                        </div>
                    </div>
                        <div className="cl-lg-6  order-1 order-lg-2 header-img">
                         <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                        </div>
                </div>   
            </div>
        </div>
    </div>

     </section>
    </>
  );
}

export default Common;
