import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import FormLogin from '../Forms/FormLogin';
import { UserContext } from '../../Context/Context';

const Acces = () => {
  const { login } = useContext(UserContext);
  return (
    <section>{login ? <Navigate to="/MyAccount" /> : <FormLogin />}</section>
  );
};
export default Acces;
