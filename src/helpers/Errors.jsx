import React from 'react';
import styles from '../helpers/Error.module.css';

const Errors = ({ error }) => {
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
};
export default Errors;
