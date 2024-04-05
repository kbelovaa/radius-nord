import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  return (
    <section className="main-section">
      <div className="container">
        <div className="main">
          <h1 className="main__title">
            Radius Nord invests in middle-stage <span className="main__title_highlighted">residential property</span> in
            Norway
          </h1>
          <div className="main__info">
            <div className="main__text">
              Our participation enables developers to achieve off-plan pre-sale targets quicker. Our investments are
              medium to long term, with subsequent monetisation upon project completion or deploying a buy-to-let model.
              Radius Nord is primarily focused on Tromso and Oslo regions and is managed by a team of professionals with
              finance and construction background.
            </div>
            <button className="btn" onClick={() => navigate('/contact-us')}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
