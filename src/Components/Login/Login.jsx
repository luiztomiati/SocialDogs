import { Routes, Route } from 'react-router-dom';
import Acces from './Acces';
import ResetPassword from './ResetPassword';
import PasswordLost from './PasswordLost';
import styles from '../Login/Login.module.css';
import CreateAccount from './CreateAccount';
import NotFound from '../../helpers/NotFound';
const Login = () => {
  return (
    <section className={styles.Login}>
      <div className={styles.LoginContent}>
        <Routes>
          <Route path="/" element={<Acces />}></Route>
          <Route path="Reset" element={<ResetPassword />}></Route>
          <Route path="Create" element={<CreateAccount />}></Route>
          <Route path="PasswordLost" element={<PasswordLost />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};
export default Login;
