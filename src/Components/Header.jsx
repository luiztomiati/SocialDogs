import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './css/Header.module.css';
import Logo from './Assets/dogs.svg?react';
import UserLogin from './Assets/usuario.svg?react';
import LogoutImg from './Assets/sair.svg?react';
import { UserContext } from '../Context/Context';

const Header = () => {
  const { user, login, logout } = React.useContext(UserContext);
  return (
    <header className={styles.Header}>
      <nav className={`${styles.HeaderNav} 'container'`}>
        <Link className={styles.HeaderLogo} to={'/'} aria-label="Home">
          <Logo />
        </Link>
        <div className={styles.LinksHeaders}>
          {user != null ? (
            <div className={styles.containerLinks}>
              <NavLink className={styles.HeaderLinksLogin} to={'/Login'} end>
                {user.nome}
                <UserLogin className={styles.UserLogin} />
              </NavLink>
              <button onClick={logout} className={styles.HeaderBtnLogout}>
                <LogoutImg className={styles.Logout} />
              </button>
            </div>
          ) : (
            <NavLink className={styles.HeaderLinksLogin} to={'/Login'} end>
              Login
            </NavLink>
          )}
          {login == false && (
            <NavLink className={styles.HeaderLinks} to={'/Login/Create'}>
              Criar usúario
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
