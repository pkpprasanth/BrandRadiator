import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate  = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password:"",
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
        navigate("/")
      };
    
      return (
        
        <div className="form-container">
              <header style={{color:"white"}}>Login as a Admin</header>

          <form className="register-form" onSubmit={handleSubmit}> 
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
                Login
              </button>
            )}
          </form>
        </div>
      );
};

export default Login;