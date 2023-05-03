import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import About from './pages/about/About.jsx';
import ContactUs from './pages/contactus/ContactUs.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';



const App = () => {
  return (
    <BrowserRouter basename='/BrandRadiator'>
      <Header />
      <Sidebar>
        <Routes>
          <Route exact path="/BrandRadiator" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;