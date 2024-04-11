import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import background1440 from '../../images/background1440.png';
import background1024 from '../../images/background1024.png';
import background744 from '../../images/background744.png';
import background390 from '../../images/background390.png';
import logo from '../../images/logo.svg';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => {
  const [backgroundImg, setBackgroundImg] = useState(background1440);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width <= 744:
          setBackgroundImg(background390);
          break;
        case width <= 1024:
          setBackgroundImg(background744);
          break;
        case width <= 1440:
          setBackgroundImg(background1024);
          break;
        default:
          setBackgroundImg(background1440);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="content" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="header-section">
        <div className="container">
          <div className="header">
            <div className="header__logo-wrap" onClick={() => navigate('/')}>
              <img className="header__logo" src={logo} alt="First sl" />
              <span className="header__text">RadiusNord</span>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
