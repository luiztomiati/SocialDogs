import React from 'react';
import { GetPhotos } from '../../api';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItens from './FeedPhotoItens';
import styles from './FeedPhotos.module.css';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';

const FeedPhotos = ({ setModalPhoto }) => {
  const { request, dados, loading, error } = useFetch();
  React.useEffect(() => {
    async function GetPhotosFeed() {
      const { url, options } = GetPhotos({ total: 6, page: 1, user: 0 });
      await request(url, options);
    }
    GetPhotosFeed();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (dados)
    return (
      <section className={styles.container}>
        {dados.map((dados) => (
          <FeedPhotosItens
            key={dados.id}
            photo={dados}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </section>
    );
  else {
    return null;
  }
};
export default FeedPhotos;
