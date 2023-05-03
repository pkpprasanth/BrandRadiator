import React, { useState } from "react";
import "./ContactUs.css"
import axios from 'axios';

const ContactUs = () => {
    const [values, setValues] = useState({
        firstName: "",
        phoneNumber: "",
        email: "",
        websiteLink:"",
      });
    
      const handleInputChange = (event) => {
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`,{values})
        .then(res => {
          console.log("res",res);
          console.log(res.data);
        })
        if (values.firstName && values.phoneNumber && values.email && values.websiteLink) {
          setValid(true);
            }
        setSubmitted(true);
      };
    
      return (
        
        <div className="form-container">
              <header style={{color:"white"}}>Send us a Message to reach out to us</header>

          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Hi {values.firstName}{" "}
                </h3>
                <div> Our team reach out shortly. </div>
              </div>
            )}
            {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter a first name</span>
            )}
    
            {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.phoneNumber && (
              <span id="last-name-error">Please enter a last name</span>
            )}
    
            {!valid && (
              <input
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
              {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="website Link"
                name="websiteLink"
                value={values.websiteLink}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.websiteLink && (
              <span id="websiteLink-error">Please enter an website Link</span>
            )}
            {!valid && (
              <button class="form-field" type="submit">
                Contact Us
              </button>
            )}
          </form>
        </div>
      );
};

export default ContactUs;