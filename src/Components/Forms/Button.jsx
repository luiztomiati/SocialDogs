import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../css/Button.module.css';

const Button = ({
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`${Styles.Button} ${Styles[size]} ${Styles[variant]} ${className} `}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
