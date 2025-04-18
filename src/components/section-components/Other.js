import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Other = ({heading,text}) => {
  return (
    <div className="container ltn__feature-area  pt-120 pb-90 mb-120---">
      <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3 my-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">
             {heading}
              </h1>
              <p className="sextion-text">
              {text}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div id="accordion_2">
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-2-1"
                  aria-expanded="false"
                >
                  <i className="flaticon-mortarboard" /> Brilliant Ideas
                </h6>
                <div
                  id="faq-item-2-1"
                  className="collapse"
                  data-bs-parent="#accordion_2"
                >
                  <div className="card-body">
                    <p>
                      Our PH.D. experts always deliver unique and smart
                      solutions
                    </p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-2-2"
                  aria-expanded="false"
                >
                  <i className="flaticon-hospital" />
                  Timely Assistance
                </h6>
                <div
                  id="faq-item-2-2"
                  className="collapse "
                  data-bs-parent="#accordion_2"
                >
                  <div className="card-body">
                    <p>
                      We make sure that our students receive timely and best
                      assistance.
                    </p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-2-3"
                  aria-expanded="false"
                >
                  <i className="flaticon-metro" /> Privacy Guaranteed
                </h6>
                <div
                  id="faq-item-2-3"
                  className="collapse"
                  data-bs-parent="#accordion_2"
                >
                  <div className="card-body">
                    <p>
                      We are a safe and secured company and value our customers’
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          
          <div className="col-lg-6">
            <div id="accordion_3">
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-3-4"
                  aria-expanded="false"
                >
                  <i className="flaticon-building" /> 24/7 Availability
                </h6>
                <div
                  id="faq-item-3-4"
                  className="collapse"
                  data-bs-parent="#accordion_3"
                >
                  <div className="card-body">
                    <p>
                      We are here to address your concerns and problems 24/7.
                    </p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-3-5"
                  aria-expanded="false"
                >
                  <i className="flaticon-airplane" />
                  Customer Satisfaction
                </h6>
                <div
                  id="faq-item-3-5"
                  className="collapse"
                  data-bs-parent="#accordion_3"
                >
                  <div className="card-body">
                    <p>
                      We try our level best to Writing our customers with
                      everything.
                    </p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="card">
                <h6
                  className="collapsed ltn__card-title"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-item-3-6"
                  aria-expanded="false"
                >
                  <i className="flaticon-slider" /> Boost Grades
                </h6>
                <div
                  id="faq-item-3-6"
                  className="collapse"
                  data-bs-parent="#accordion_3"
                >
                  <div className="card-body">
                    <p>
                      Our team put all their efforts to level up the students’
                      grades.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
             <button className="col-lg-2 col-md-12 col-sm-12 btn theme-btn-1 ">
              <Link to={'/contact'}>Order Now</Link>
             </button>
        </div>
      </div>
    </div>
  );
};

export default Other;
