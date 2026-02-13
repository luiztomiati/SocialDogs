import React from 'react';
import styles from './NotFound.module.css';
import Head from './Head';

const NotFound = () => {
  return (
    <section className="container">
      <Head
        title={'404 - Pagina não encontrada'}
        description={
          'A página que você está procurando não existe ou foi movida.'
        }
      />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={styles.title}>404 - Ops! Pagina não encontrada</h1>
          <h2>A página que você procura saiu para passear.</h2>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
