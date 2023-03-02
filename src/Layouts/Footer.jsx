import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

import './Footer.css'

const Footer = () => {
  return (
    <>

    <div className="Footer">
<Row >   
    <div className="col-sm-2   footerCattegory"> <h4> <b>TECH</b>  </h4> </div>
    <div className="col-sm-2 footerCattegory"> <h4> <b>  HOW-TO </b> </h4> </div>
    <div className="col-sm-2  footerCattegory"> <h4><b> GAMETECHIE </b>  </h4></div>
    <div className="col-sm-2   footerCattegory"> <h4><b>RECH </b></h4></div>
    <div className="col-sm-2   footerCattegory"> <h4><b>RECH </b></h4></div>
    <div className="col-sm-2   footerCattegory"> <h4><b>RECH </b></h4></div>
   

</Row>





<div class="flex-container">
   <div class=" flex-footer-items">Contact Us</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Sitemap</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">About us</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Commerce Policy</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Coupons</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Jobs</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Cookies Policy</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Privacy Policy</div>
   <div class=" flex-footer-items">|</div>
   <div class=" flex-footer-items">Terms of Service</div>

</div>



<div class="flex-container-Socialmedia">
   <div class=" flex-footer-Socialmedia-icon"><i class="fab fa-facebook-f"></i></div>
   <div class=" flex-footer-Socialmedia-icon"><i class="fab fa-twitter"></i></div>
   <div class=" flex-footer-Socialmedia-icon"><i class="fab fa-linkedin-in"></i></div>
   <div class=" flex-footer-Socialmedia-icon"><i class="fab fa-youtube"></i></div>
   <div class=" flex-footer-Socialmedia-icon"><i class="fab fa-instagram"></i></div>
</div>



<div className="footer-title">Copyright © 2023 Praveen Premasinghe. All rights reserved. Registration on or use of this site constitutes acceptance of our Terms of Service</div>

</div>


    </>
  );
};

export default Footer;
