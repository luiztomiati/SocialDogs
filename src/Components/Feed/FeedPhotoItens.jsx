import styles from './FeedPhotoItens.module.css';
import User from '../Assets/usuario.svg?react';
import Eyes from '../Assets/visualizacao-black.svg?react';

const FeedPhotosItens = ({ photo }) => {
  return (
    <section>
      <li className={styles.photo}>
        <div className={styles.userPost}>
          <div className={styles.userIcon}>
            <User />
          </div>
          <div className={styles.userInformation}>
            <span className={styles.author}>{photo.author}</span>
            <span className={styles.date}>
              {new Date(photo.date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.imgFeed} src={photo.src} alt={photo.title} />
          <div className={styles.overlay}>
            <Eyes />
            <span>{photo.acessos}</span>
          </div>
        </div>
        <div className={styles.informationPost}>
          <p>{photo.title}</p>
        </div>
      </li>
    </section>
  );
};
export default FeedPhotosItens;
