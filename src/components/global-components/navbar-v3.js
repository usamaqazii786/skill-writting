import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { Modal } from "react-bootstrap";

class NavbarV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      formData: {
        email: "",
        phone: "",
        query: "",
        website: "skilled writing",
        agree: false,
      },
      errors: {
        email: "",
        phone: "",
        query: "",
      },
    };
  }

  componentDidMount() {
    // Automatically open the modal after 5 seconds
    this.modalTimer = setTimeout(() => {
      this.setState({ showModal: true });
    }, 9000);
  }

  componentWillUnmount() {
    clearTimeout(this.modalTimer);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { formData } = this.state;

    const formDatat = new FormData();
    formDatat.append("email", formData.email);
    formDatat.append("phone", formData.phone);
    formDatat.append("query", formData.query);
    formDatat.append("website", formData.website);

    axios
      .post("https://skillwritingapi.dev-sh.xyz/api/contact", formDatat, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status === true) {
          console.log(response.data);
          toast.success(response.data.message);
          // Reset form data after successful submission
          this.setState({
            formData: {
              email: "",
              phone: "",
              query: "",
            },
            errors: {
              email: "",
              phone: "",
              query: "",
            },
          });
        }
      })
      .catch((error) => {
        toast.error("This didn't work.");
      });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    this.setState(
      (prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: fieldValue,
        },
      }),
      () => {
        this.validateField(name, fieldValue);
      }
    );
  };

  validateField = (fieldName, value) => {
    let errorquery = "";

    switch (fieldName) {
      case "name":
        errorquery = value ? "" : "Name is required";
        break;
      case "email":
        errorquery = this.isValidEmail(value) ? "" : "Invalid email address";
        break;
      case "phone":
        errorquery = value ? "" : "phone number is required";
        break;
      case "query":
        errorquery = value ? "" : "query is required";
        break;
      default:
        break;
    }

    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [fieldName]: errorquery,
      },
    }));
  };

  validateForm = () => {
    const { formData } = this.state;
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];
        this.validateField(key, value);
        if (this.state.errors[key]) {
          isValid = false;
        }
      }
    }

    return isValid;
  };

  isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { formData, errors } = this.state;

    return (
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
          <div className="ltn__header-top-area top-area-color-white">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-12">
                  <div className="ltn__top-bar-menu">
                    <ul className="d-flex flex-wrap align-items-center justify-content-center">
                
                      <li>
                        <a href="mailto:info@skilledwriting.co.uk">
                          <i className="icon-mail" />
                          info@skilledwriting.co.uk
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <i className="icon-call" />{" "}
                          <i className="icon-whatsapp" /> UK : +44 7554405359
                          {" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/+447471095853?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-call" />
                          <i className="icon-whatsapp" /> UK:
                          +44 7471095853
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          src={publicUrl + "assets/img/slider/logo-5.png"}
                          className="usa_hw"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a
                            href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            +447554405359
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column menu-color-white">
                  <div className="header-menu d-none d-xl-block go-top">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li className="">
                          <Link to="/">Home </Link>
                          </li>
                          <li className="">
                            <Link to="/skilled-writing">Service</Link>
                            <ul>
                              <div className="row col-lg-12">
                                <div className="col-lg-4">
                                  <li>
                                    <Link to="/skilled-writing">
                                      skilled writing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/dissertation-writing">
                                      Dissertation Writing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/essay-writing">Essay Writing</Link>
                                  </li>
                                  <li>
                                    <Link to="/live-session">
                                      Live Sessions
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/presentation-writing">
                                      Presentation Writing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/speech-writing">Speech Writing</Link>
                                  </li>
                                  <li>
                                    <Link to="/video-solution">
                                      Video Solutions
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/project-Report">
                                      Project Report Writing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/lab-report">Lab Report</Link>
                                  </li>
                                  <li>
                                    <Link to="/philosophy-skilled-writing">
                                      Philosophy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/academic-editing-services-skilled-writing">
                                      Academic Editing Services
                                    </Link>
                                  </li>
                                </div>

                                <div className="col-lg-4">
                                  <li>
                                    <Link to="/physics-skilled-writing">
                                      Physics
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/programming-skilled-writing">
                                      Programming
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/sociology-skilled-writing">
                                      Sociology
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/statistics-skilled-writing">
                                      Statistics
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/nursing-skilled-writing">
                                      Nursing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/management-skilled-writing">
                                      Management
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/linguistics-skilled-writing">
                                      Linguistics
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/computer-science-skilled-writing">
                                      Computer Science
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/business-skilled-writing">
                                      Business
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/chemistry-skilled-writing">
                                      Chemistry
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/dissertation-support-skilled-writing">
                                      Dissertation Support
                                    </Link>
                                  </li>
                                </div>
                                <div className="col-lg-4">
                                  <li>
                                    <Link to="/accounting-skilled-writing">
                                      Accounting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/IT-skilled-writing">
                                      IT Assignments
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/engineering-skilled-writing">
                                      Engineering
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/english-skilled-writing">
                                      English
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/biology-science-skilled-writing">
                                      Biology Science
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/marketing-skilled-writing">
                                      Marketing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/math-skilled-writing">
                                      Math
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/finance-skilled-writing">
                                      Finance
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/economic-skilled-writing">
                                      Economic
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/history-skilled-writing">
                                      History
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/geography-skilled-writing">
                                      Geography
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/law-skilled-writing">Law</Link>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </li>
                          <li className="">
                            <Link to="/contact">Contact us</Link>
                          </li>
                          <li className="">
                            <Link to="/blog-grid">Blog</Link>
                          </li>

                          <li>
                            <Link to="/faq">FAQS</Link>
                          </li>
                          <li className="special-link">
                            <a
                              href={`https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org"`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsWhatsapp
                                style={{
                                  fontSize: "28px",
                                  marginRight: "10px",
                                }}
                              />
                              WhatsApp
                            </a>
                          </li>
                          <li className="special-link">
                            <a
                              href={`https://tawk.to/chat/5d2346a222d70e36c2a4b1b9/1fuov8514`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Chat
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src={publicUrl + "assets/img/slider/logo-6.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>

            <div className="ltn__utilize-menu">
              <ul style={{textAlign:"center"}}>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to="/skilled-writing">Service</Link>
                  <ul class="sub-menu full-width row col-lg-12 text-center">
                    <div className="">
                      <div className="col-lg-4">
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
                          <Link to="/speech-writing">Speech Writing</Link>
                        </li>
                        <li>
                          <Link to="/video-solution">Video Solutions</Link>
                        </li>
                        <li>
                          <Link to="/project-Report">
                            Project Report Writing
                          </Link>
                        </li>
                        <li>
                          <Link to="/lab-report">Lab Report</Link>
                        </li>
                        <li>
                          <Link to="/philosophy">Philosophy</Link>
                        </li>
                        <li>
                          <Link to="/academic-editing-services-skilled-writing">
                            Academic Editing Services
                          </Link>
                        </li>
                      </div>

                      <div className="col-lg-4">
                        <li>
                          <Link to="/physics-skilled-writing">Physics</Link>
                        </li>
                        <li>
                          <Link to="/programming-skilled-writing">
                            Programming
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/skilled-writing">
                            Psychology
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/sociology-skilled-writing">
                            Sociology
                          </Link>
                        </li>
                        <li>
                          <Link to="/statistics-skilled-writing">
                            Statistics
                          </Link>
                        </li>
                        <li>
                          <Link to="/nursing-skilled-writing">Nursing</Link>
                        </li>
                        <li>
                          <Link to="/management-skilled-writing">
                            Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/linguistics-skilled-writing">
                            Linguistics
                          </Link>
                        </li>
                        <li>
                          <Link to="/computer-science-skilled-writing">
                            Computer Science
                          </Link>
                        </li>
                        <li>
                          <Link to="/business-skilled-writing">Business</Link>
                        </li>
                        <li>
                          <Link to="/chemistry-skilled-writing">
                            Chemistry
                          </Link>
                        </li>
                        <li>
                          <Link to="/dissertation-support-skilled-writing">
                            Dissertation Support
                          </Link>
                        </li>
                      </div>
                      <div className="col-lg-4">
                        <li>
                          <Link to="/accounting-skilled-writing">
                            Accounting
                          </Link>
                        </li>
                        <li>
                          <Link to="/IT-skilled-writing">IT Assignments</Link>
                        </li>
                        <li>
                          <Link to="/engineering-skilled-writing">
                            Engineering
                          </Link>
                        </li>
                        <li>
                          <Link to="/english-skilled-writing">English</Link>
                        </li>
                        <li>
                          <Link to="/biology-science-skilled-writing">
                            Biology Science
                          </Link>
                        </li>
                        <li>
                          <Link to="/marketing-skilled-writing">
                            Marketing
                          </Link>
                        </li>
                        <li>
                          <Link to="/math-skilled-writing">Math</Link>
                        </li>
                        <li>
                          <Link to="/finance-skilled-writing">Finance</Link>
                        </li>
                        <li>
                          <Link to="/economic-skilled-writing">Economic</Link>
                        </li>
                        <li>
                          <Link to="/history-skilled-writing">History</Link>
                        </li>
                        <li>
                          <Link to="/geography-skilled-writing">
                            Geography
                          </Link>
                        </li>
                        <li>
                          <Link to="/law-skilled-writing">Law</Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li><Link to="/contact">Review</Link></li> */}
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="ltn__social-media-2">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100066920298893"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/skilledWritings/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Modal
          className="mt-10"
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>skilled writing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="contact-form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-item input-item-email ltn__custom-icon">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={this.handleChange}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-item input-item-phone ltn__custom-icon">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={this.handleChange}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-item input-item-textarea ltn__custom-icon">
                <textarea
                  name="query"
                  placeholder="Enter query"
                  value={formData.query}
                  onChange={this.handleChange}
                />
                {errors.query && (
                  <span className="error-message">{errors.query}</span>
                )}
              </div>

              <div className="btn-wrapper mt-0 ">
                <button
                  className="btn  theme-btn-1 btn-effect-1 text-uppercase"
                  type="submit"
                >
                  get in Touch
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* Optionally, you can add a close button here */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NavbarV3;
