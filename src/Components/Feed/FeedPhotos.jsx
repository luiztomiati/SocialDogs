import FeedPhotosItens from './FeedPhotoItens';
import styles from './FeedPhotos.module.css';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';

const FeedPhotos = ({ setModalPhoto, loading, error, photos }) => {
  if (error) return <Errors error={error} />;
  return (
    <section className={styles.container}>
      {photos &&
        photos.length > 0 &&
        photos.map((photo) => (
          <FeedPhotosItens
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      {loading && <Loading />}
    </section>
  );
};
export default FeedPhotos;
