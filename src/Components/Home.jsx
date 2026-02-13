import React from 'react';
import FeedPhotos from './Feed/FeedPhotos';
import FeedModal from './Feed/FeedModal';
import useScrollInfinite from '../Hooks/useScrollInfinite';
import useFetch from '../Hooks/useFetch';
import styles from './css/Home.module.css';
import { GetPhotos } from '../api';
import User from './Assets/usuario.svg?react';

const Home = ({ user, total, authorExternal = false }) => {
  const [modalPhoto, setModalPhoto] = React.useState();
  const [photos, setPhotos] = React.useState([]);
  const [stopPhoto, setStopPhoto] = React.useState(false);

  const [infinite, setInfinite] = React.useState(true);
  const { currentPage } = useScrollInfinite(infinite);
  const { request, loading, error } = useFetch();

  React.useEffect(() => {
    async function GetPhotosFeed() {
      const { url, options } = GetPhotos({
        total,
        page: currentPage,
        user,
      });
      const { response, result } = await request(url, options);
      if (response && response.ok && result.length > 0) {
        setPhotos((prev) => {
          const oldIds = prev.map((p) => p.id);
          const filterPhotos = result.filter(
            (photo) => !oldIds.includes(photo.id),
          );
          return [...prev, ...filterPhotos];
        });
        setInfinite(true);
      } else {
        setStopPhoto(true);
        setInfinite(false);
      }
    }
    if (!stopPhoto) {
      GetPhotosFeed();
    }
  }, [currentPage, request, user, total, stopPhoto]);
  return (
    <section className="container">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {authorExternal && (
        <div className={styles.userPost}>
          <div className={styles.userIcon}>
            <User />
          </div>
          <div className={styles.userContainer}>
            <h1 className={styles.authorExternal}>{user}</h1>
          </div>
        </div>
      )}
      <FeedPhotos
        page={currentPage}
        setModalPhoto={setModalPhoto}
        setInfinity={setInfinite}
        user={user}
        error={error}
        loading={loading}
        photos={photos}
      />
    </section>
  );
};
export default Home;
