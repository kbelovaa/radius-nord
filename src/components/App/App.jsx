import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ContactUs from '../ContactUs/ContactUs';
import Confirmation from '../Confirmation/Confirmation';
import '../../utils/i18n';
import './App.scss';

const App = () => (
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

export default App;
