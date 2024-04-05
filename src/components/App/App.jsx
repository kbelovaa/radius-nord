import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ContactUs from '../ContactUs/ContactUs';
import Confirmation from '../Confirmation/Confirmation';
import './App.scss';

const App = () => {
  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        localStorage.setItem('countryCode', countryCode.toLowerCase());

        return countryCode.toLowerCase();
      } catch {
        localStorage.removeItem('countryCode');
      }
    };

    getCountryFromIP();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
