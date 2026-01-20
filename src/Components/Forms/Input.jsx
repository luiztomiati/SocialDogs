import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../css/Input.module.css';
import Errors from '../../helpers/Errors';

const Input = ({
  Id,
  type = 'text',
  size = 'sm',
  children,
  onChange,
  onBlur,
  error,
  value,
  placeholder,
  className = '',
}) => {
  return (
    <div className={Styles.wrapper}>
      <label className={`${Styles.Label}`} htmlFor={Id}>
        {children}
      </label>
      <input
        className={`${Styles.Input} ${Styles[size]} ${className}`}
        id={Id}
        type={type}
        name={Id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Errors error={error} />}
    </div>
  );
};

Input.propTypes = {
  Id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
};
export default Input;
