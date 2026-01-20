import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Acces from './Acces';
import ResetPassword from './ResetPassword';
import CreateRegistration from './CreateRegistration';
import PasswordLost from './PasswordLost';
import styles from '../css/Login.module.css';
import CreateAccount from './CreateAccount';
const Login = () => {
  return (
    <section className={styles.Login}>
      <Routes>
        <Route path="/" element={<Acces />}></Route>
        <Route path="Reset" element={<ResetPassword />}></Route>
        <Route path="Create" element={<CreateAccount />}></Route>
        <Route path="PasswordLost" element={<PasswordLost />}></Route>
      </Routes>
    </section>
  );
};
export default Login;
