import React, { useContext } from 'react';
import styles from '../Photo/PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../Context/Context';
import PhotoDelete from './PhotoDelete';
import Image from '../../helpers/Image';

const PhotoContent = ({ dados }) => {
  const { user } = useContext(UserContext);
  const { photo, comments } = dados;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualization}>{photo.acessos}</span>
          </p>
          <h1 className="Title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};
export default PhotoContent;
