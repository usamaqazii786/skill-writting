import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import { BsWhatsapp } from "react-icons/bs";
import Copyright from "./copyright";

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <>
        <footer className="ltn__footer-area  ">
          <div className="footer-top-area  section-bg-2 plr--5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-about-widget">
                    <div className="footer-logo">
                      <div className="site-logo">
                        <img
                          src={publicUrl + "assets/img/slider/logo-5.png"}
                          width={"200px"}
                          alt="Logo"
                        />
                      </div>
                    </div>
                    <p>
                      We are a group of skilled Writting Writingers with several
                      years of experience ..
                    </p>
                    <div className="ltn__social-media mt-20">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Company</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Services</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to="/skilled-writing">skilled writing</Link>
                        </li>
                        <li>
                          <Link to="/dissertation-writing">Dissertation Writing</Link>
                        </li>
                        <li>
                          <Link to="/essay-writing">Essay Writing</Link>
                        </li>
                        <li>
                          <Link to="/live-session">Live Sessions</Link>
                        </li>
                        <li>
                          <Link to="/presentation-writing">
                            Presentation Writing
                          </Link>
                        </li>
                        <li>
                          <Link to="/project-Report">Project Report</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                  <div className="footer-widget footer-newsletter-widget">
                    <h4 className="footer-title">Newsletter</h4>
                    <p>
                      Subscribe to our weekly Newsletter and receive updates via
                      email.
                    </p>
                    <h5 className="mt-30">We Accept</h5>
                    <img
                      src={publicUrl + "assets/img/icons/payment-4.png"}
                      alt="Payment Imsage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </footer>

        <div className="text">
          <BsWhatsapp style={{ fontSize: "28px" }} />

          <span style={{ fontSize: "18px" }}>
            <a
              href={`https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org`}
              target="_blank"
              rel="noopener noreferrer"
            >
              +447554405359
            </a>
          </span>
        </div>
      </>
    );
  }
}

export default Footer_v1;
