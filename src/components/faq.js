import React from "react";
import Navbar from "./global-components/navbar-v3";
import PageHeader from "./global-components/page-header";
import Faq from "./section-components/faq-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const FaqV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        img="assets/img/slider/faq.webp"
        headertitle="Frequently asked questions"
        subheader="FAQ"
      />
      <Faq />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default FaqV1;
