import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={styles.title}>404 - Ops! Pagina não encontrada</h1>
          <h2>A página que você procura saiu pra passear.</h2>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
