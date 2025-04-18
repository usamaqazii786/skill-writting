import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/10.png"}
                    alt="IconImage"
                  />
                </div>
                <h5>Email Address</h5>
                <p>
                  {/* <a href="mailto:Info@skilledwriting.org">
                    Info@skilledwriting.org
                  </a> */}
                  {/* <br></br> */}
                  <a href="mailto:info@skilledwriting.co.uk">
                    info@skilledwriting.co.uk
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="IconImage"
                  />
                </div>
                <div className="ltn__top-bar-menu ">
                  <h5>UK Call And whatsapp</h5>
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/+44 7554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textAlign:"center"}}
                      >
                        +44 7554 405359
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="IconImage"
                  />
                </div>
                <div className="ltn__top-bar-menu ">
                  <h5>Whatsapp Chat</h5>
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/+447471095853?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        +44 7471 095853{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
