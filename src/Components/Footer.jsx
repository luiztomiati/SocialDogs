import React from 'react';
import styles from './Footer.module.css';
import LogoFooter from './Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <LogoFooter />
      <p>Alguns direitos reservados.</p>
    </section>
  );
};
export default Footer;
