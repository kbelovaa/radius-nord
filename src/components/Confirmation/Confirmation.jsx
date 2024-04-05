import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirmation.scss';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <section className="confirmation-section">
      <div className="container">
        <div className="confirmation">
          <svg
            className="confirmation__tick"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="101"
            viewBox="0 0 100 101"
            fill="none"
          >
            <path
              d="M16.6667 54.7957L37.5001 75.6291L83.3334 29.7957"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="confirmation__text">Your message has been sent</p>
          <span className="confirmation__link" onClick={() => navigate('/')}>
            Go to main page
          </span>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
