import { useLocation } from 'react-router-dom';
import UserNavLinks from './UserNavLinks';
import Styles from '../css/HeaderNav.module.css';

const HeaderOfAccount = () => {
  const titles = {
    '/MyAccount': 'Minha conta',
    '/MyAccount/statistics': 'Estatísticas',
    '/MyAccount/CreatedPost': 'Posts',
  };
  const { pathname } = useLocation();
  const title = titles[pathname] || 'Minha conta';

  return (
    <header className={Styles.Header}>
      <h1 className="Title">{title}</h1>
      <UserNavLinks />
    </header>
  );
};

export default HeaderOfAccount;
