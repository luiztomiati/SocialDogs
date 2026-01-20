import React from 'react';
import Styles from '../Components/css/Error.module.css';

const Errors = ({ error }) => {
  if (!error) return null;
  return <p className={Styles.error}>{error}</p>;
};
export default Errors;
