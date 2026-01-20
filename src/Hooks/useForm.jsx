import React from 'react';
const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Email invalido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message:
      'A senha precisa ter no mínimo 8 caracteres, com letra maiúscula, número e caractere especial.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Insira apenas números.',
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }
  function validate(value) {
    if (type === false) {
      return true;
    } else if (value.length == 0) {
      setError('preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
export default useForm;
