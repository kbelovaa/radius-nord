import React from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import 'react-phone-input-2/lib/style.css';
import './PhoneField.scss';

const PhoneField = ({ mobile, setMobile, isMobileValid, setIsMobileValid }) => {
  const ipCountry = localStorage.getItem('countryCode');

  const { t } = useTranslation();

  const handleMobileChange = (value, country) => {
    setMobile(value);
    if (country.countryCode) {
      const phoneNumber = value === '' || isValidNumber(value, country.countryCode.toUpperCase());
      setIsMobileValid(!!phoneNumber);
    }
  };

  return (
    <div className="phone-field">
      <label htmlFor="mobile" className="form__label">
        Phone nr
      </label>
      <PhoneInput
        value={mobile}
        onChange={handleMobileChange}
        country={ipCountry}
        enableSearch={true}
        inputClass={`${!ipCountry && !mobile ? 'default' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        buttonClass={`${!ipCountry && !mobile ? 'hidden' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        autoFormat
      />
      <p className={isMobileValid ? 'hidden' : 'form__note'}>{t('enterValidMobile')}</p>
    </div>
  );
};

export default PhoneField;
