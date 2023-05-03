import React, { useState } from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate  = useNavigate();

    const [values, setValues] = useState({
        firstName:"",
        phoneNumber: "",
        email: "",
        password:""
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
        if (values.firstName && values.password && values.phoneNumber && values.email) {
          setValid(true);
          navigate("/login")
            }
        setSubmitted(true);
      };
    
      return (
        
        <div className="form-container">
              <header style={{color:"white"}}>Signup as a Admin</header>

          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Hi {values.firstName}{" "}
                </h3>
                <div>Account Registration Successful</div>
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
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
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
    
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
              {!valid && (
              <input
                class="form-field"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.password && (
              <span id="password-error">Please enter an Password</span>
            )}
            {!valid && (
              <button class="form-field" type="submit">
                Signup
              </button>
            )}
          </form>
        </div>
      );
};

export default Signup;