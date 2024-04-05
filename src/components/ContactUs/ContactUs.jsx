import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sendData from '../../http/sendData';
import PhoneField from '../PhoneField/PhoneField';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [text, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (name && email && isEmailValid && phone && isPhoneValid) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      const data = new FormData();
      data.append('Name', name);
      data.append('Email', email);
      data.append('Mobile', phone);
      data.append('Text', text);

      setLoading(true);

      const result = await sendData(data);

      if (result.status === 200) {
        setIsFormValid(true);
        setName('');
        setEmail('');
        setPhone('');
        setText('');
        setLoading(false);
        navigate('/confirmation');
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="contact-us">
          <h2 className="contact-us__title">Contact us</h2>
          <form className={`contact-us__form ${isFormValid ? '' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="input-wrap">
              <label htmlFor="name" className="label">
                Name*
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!isFormValid && !name && 'invalid-field'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="email" className="label">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className={`input ${!isFormValid && (!email || !isEmailValid) && 'invalid-field'}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              {!isEmailValid && <p className="message">Please enter a valid email address</p>}
            </div>
            <PhoneField
              mobile={phone}
              setMobile={setPhone}
              isMobileValid={isPhoneValid}
              setIsMobileValid={setIsPhoneValid}
            />
            <div className="input-wrap">
              <label htmlFor="text" className="label">
                Text
              </label>
              <textarea
                id="text"
                rows="1"
                className="input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
              {!isFormValid && (!name || !email || !phone) && <p className="message">Please fill in all fields</p>}
            </div>
            {loading ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button className={`btn contact-us__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
