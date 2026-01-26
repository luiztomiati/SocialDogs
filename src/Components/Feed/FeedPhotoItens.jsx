import styles from './FeedPhotoItens.module.css';
import User from '../Assets/usuario.svg?react';
import Eyes from '../Assets/visualizacao.svg?react';
import Image from '../../helpers/Image';

const FeedPhotosItens = ({ photo, setModalPhoto }) => {
  function ModalPhoto() {
    setModalPhoto(photo);
  }
  return (
    <section onClick={ModalPhoto}>
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
          <Image src={photo.src} alt={photo.title} />
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
