import React, { useState } from 'react';
import "./Footer.css"
const Footer = () => {
 
    return (
        <div class="footer">
  <div class="inner-footer">

    <div class="footer-items">
      <h1>Brand Radiator</h1>
      <p>We are the team unifying creativity and technology to re-architect brands We are one of the splinters of Digital India.</p>
    </div>
    

    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Social media</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Facebook</li></a>
          <a href="#"><li>LinkedIn</li></a>
          <a href="#"><li>Twitter</li></a>
        </ul>
    </div>
    <div class="footer-items">
      <h3>Products</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>Interview As A Service</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>Platform As A Service</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>Resume As A Service</li>
        </ul> 
      
        <div class="social-media">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
    
  </div>
    <div class="footer-bottom">
    Copyright &copy; 2023.
  </div>

</div>
  
    );
};

export default Footer;