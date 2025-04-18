import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomeV2 from "./components/home-v2";
import HomeV3 from "./components/home-v3";
import HomeV4 from "./components/home-v4";
import HomeV5 from "./components/home-v5";
import HomeV6 from "./components/home-v6";
import HomeV7 from "./components/home-v7";
import HomeV8 from "./components/home-v8";
import HomeV9 from "./components/home-v9";
import HomeV10 from "./components/home-v11";

import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Portfolio from "./components/portfolio";
import PortfolioV2 from "./components/portfolio-v2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";

import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./components/product-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";

import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";
import AddListing from "./components/add-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import ProjectReport from "./components/ProjectReport";
import Philosophy from "./components/Philosophy";
import Physics from "./components/Physics";
import Programming from "./components/Programming";
import Psychology from "./components/Psychology";
import Sociology from "./components/Sociology";
import Statistics from "./components/Statistics";
import Nursing from "./components/Nursing";
import Management from "./components/Management";
import Linguistics from "./components/Linguistics";
import Computer_Science from "./components/Computer_Science";
import Business from "./components/Business";
import Accounting from "./components/Accounting";
import IT_Assignments from "./components/IT_Assignments";
import Engineering from "./components/Engineering";
import English_As from "./components/English_As";
import Biology_Science from "./components/Biology_Science";
import Marketing from "./components/Marketing";
import Math from "./components/Math";
import Finance from "./components/Finance";
import Economic from "./components/Economic";
import History_As from "./components/History_As";
import Geography from "./components/Geography";
import Law from "./components/Law";
import Chemistry from "./components/Chemistry";
import Dissertation_Support from "./components/Dissertation_Support";
import Academic_Editing from "./components/Academic_Editing";

class Root extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomeV6} />
              <Route path="/home-v2" component={HomeV2} />
              <Route path="/home-v3" component={HomeV3} />
              <Route path="/home-v4" component={HomeV4} />
              <Route path="/home-v5" component={HomeV5} />
              <Route path="/home-v7" component={HomeV7} />
              <Route path="/home-v8" component={HomeV8} />
              <Route path="/home-v9" component={HomeV9} />
              <Route path="/home-v10" component={HomeV10} />

              <Route path="/skilled-writing" component={About} />
              <Route path="/dissertation-writing" component={Service} />
              <Route path="/service-details" component={ServiceDetails} />
              <Route path="/essay-writing" component={Portfolio} />
              <Route path="/live-session" component={PortfolioV2} />
              <Route
                path="/presentation-writing"
                component={PortfolioDetails}
              />
              <Route path="/speech-writing" component={Team} />
              <Route path="/video-solution" component={TeamDetails} />
              <Route path="/faq" component={Faq} />
              <Route path="/project-report" component={ProjectReport} />
              <Route path="/coming-soon" component={ComingSoon} />
              <Route path="/404" component={Error} />
              <Route path="/lab-report" component={Location} />
              <Route path="/shop" component={Shop} />
              <Route path="/shop-grid" component={ShopGrid} />
              <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
              <Route path="/shop-right-sidebar" component={ShopRightSidebar} />

              <Route path="/product-details" component={ProdductDetails} />
              {/* blog */}
              <Route path="/blog-grid" component={BlogGrid} />
              <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
              <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
              <Route path="/blog" component={Blog} />

              <Route path="/blog-details/:name" component={BlogDetails} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/my-account" component={MyAccount} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/add-listing" component={AddListing} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/order-tracking" component={OrderTracking} />
              <Route path="/history" component={History} />
              <Route path="/philosophy-skilled-writing" component={Philosophy} />
              <Route path="/physics-skilled-writing" component={Physics} />
              <Route path="/programming-skilled-writing" component={Programming} />
              <Route path="/psychology-skilled-writing" component={Psychology} />
              <Route path="/sociology-skilled-writing" component={Sociology} />
              <Route path="/statistics-skilled-writing" component={Statistics} />
              <Route path="/nursing-skilled-writing" component={Nursing} />
              <Route path="/management-skilled-writing" component={Management} />
              <Route path="/linguistics-skilled-writing" component={Linguistics} />
              <Route
                path="/computer-science-skilled-writing"
                component={Computer_Science}
              />
              <Route path="/business-skilled-writing" component={Business} />
              <Route path="/accounting-skilled-writing" component={Accounting} />
              <Route path="/IT-skilled-writing" component={IT_Assignments} />
              <Route path="/engineering-skilled-writing" component={Engineering} />
              <Route path="/english-skilled-writing" component={English_As} />
              <Route
                path="/biology-science-skilled-writing"
                component={Biology_Science}
              />
              <Route path="/marketing-skilled-writing" component={Marketing} />
              <Route path="/math-skilled-writing" component={Math} />
              <Route path="/finance-skilled-writing" component={Finance} />
              <Route path="/economic-skilled-writing" component={Economic} />
              <Route path="/history-skilled-writing" component={History_As} />
              <Route path="/geography-skilled-writing" component={Geography} />
              <Route path="/law-skilled-writing" component={Law} />
              <Route path="/chemistry-skilled-writing" component={Chemistry} />
              <Route
                path="/dissertation-support-skilled-writing"
                component={Dissertation_Support}
              />
              <Route
                path="/academic-editing-services-skilled-writing"
                component={Academic_Editing}
              />
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
