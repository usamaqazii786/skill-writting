import React, { Component } from "react";

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let sectionClass = this.props.sectionClass ? this.props.sectionClass : "";
    let heading = this.props.heading;
    let headingTitle = this.props.headingTitle;
    let text = this.props.text;
    const data = [
      {
        Image: "assets/img/slider/uni1.jpg",
        title: "Kennesaw StateUniversity",
      },
      {
        Image: "assets/img/slider/uni2.jpg",
        title: " Duke University",
      },
      {
        Image: "assets/img/slider/uni3.webp",
        title: " Central MichiganUniversity",
      },
      {
        Image: "assets/img/slider/uni4.webp",
        title: " Victoria University ",
      },
      {
        Image: "assets/img/slider/uni5.jpg",
        title: " Northern Illinois University",
      },
      {
        Image: "assets/img/slider/uni6.jpg",
        title: " University of California",
      },
      {
        Image: "assets/img/slider/uni7.jpg",
        title: " Miami University",
      },
      {
        Image: "assets/img/slider/uni8.jpg",
        title: "Oxford University",
      },
      {
        Image: "assets/img/slider/uni9.jpg",
        title: " The University of Chicago",
      },
      {
        Image: "assets/img/slider/uni10.webp",
        title: "University of Georgia",
      },
    ];
    return (
      <div className={"ltn__blog-area pt-115--- pb-70 go-top " + sectionClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <p>{headingTitle}</p>
                <h3 className="section-title">{heading}</h3>
                <p>{text}</p>
              </div>
            </div>
          </div>
          <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* Blog Item */}
            {data.map((data, index) => {
              return (
                <div className="col-lg-12" key={index}>
                  <div className="ltn__blog-item ltn__blog-item-3">
                    <div className="ltn__blog-img d-flex justify-content-center align-items-center">
                      <img src={publicUrl + data.Image} alt="#" className="usam_h"/>
                    </div>
                    <div className="ltn__blog-brief">
                      <h3 className="ltn__blog-title">{data.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>
          {`
          .usam_h{
            height:200px;
          }
          `}
        </style>
      </div>
    );
  }
}

export default BlogSlider;
