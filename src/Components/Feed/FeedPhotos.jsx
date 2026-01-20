import React from 'react';
import { GetPhotos } from '../../api';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItens from './FeedPhotoItens';
import styles from './FeedPhotos.module.css';
const FeedPhotos = () => {
  const { request, dados } = useFetch();
  React.useEffect(() => {
    async function GetPhotosFeed() {
      const { url, options } = GetPhotos({ total: 6, page: 1, user: 0 });
      await request(url, options);
    }
    GetPhotosFeed();
  }, [request]);
  if (dados)
    return (
      <section className={styles.container}>
        {dados.map((dados) => (
          <FeedPhotosItens key={dados.id} photo={dados} />
        ))}
      </section>
    );
  else {
    return null;
  }
};
export default FeedPhotos;
