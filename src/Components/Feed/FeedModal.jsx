import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { GetPhoto } from '../../api';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';
import styles from '../../Components/Feed/FeedModal.module.css';
import PhotoComent from '../Photo/PhotoComments';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, error, dados, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = GetPhoto(photo.id);
    request(url, options);
  }, [request, photo]);
  function Clickoutside({ target, currentTarget }) {
    if (target === currentTarget) {
      setModalPhoto(null);
    }
  }
  if (error) return <Errors error={error} />;
  if (loading) return <Loading />;
  if (dados) {
    return (
      <div onClick={Clickoutside} className={styles.modal}>
        {dados && <PhotoContent dados={dados} />}
      </div>
    );
  } else return null;
};
export default FeedModal;
