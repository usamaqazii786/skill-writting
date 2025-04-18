import React  from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {Toaster} from 'react-hot-toast'

const BannerV5 = ({headerTitle,typeWriterValue,smallText}) => {

  return (
    <div className="ltn__slider-area ltn__slider-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
        >
          <div className="">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-12 mt-3 ltn__slide-animation text-center">
                  <h1
                    className="animated"
                    style={{ color: "white" }}
                  > 
                  {headerTitle}
                  </h1>
                  <p className="animated" style={{ color: "white", fontSize: "1.3rem" }}>
                    <Typewriter
                      options={{
                        strings: typeWriterValue,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                  <p className="animated" style={{ color: "white" }}>
                   {smallText}
                  </p>
                  <div className="row justify-content-center">
                  <div className="btn-wrapper mt-0">
                    <button
                      className="theme-btn-1 px-3 btn-effect-3 text-uppercase mx-auto mb-10"
                      style={{height:'45px'}}
                      type="submit"
                    >
                      <Link className="ltn__service-btn text-white" to={'/contact'}>Get In Touch</Link>
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerV5