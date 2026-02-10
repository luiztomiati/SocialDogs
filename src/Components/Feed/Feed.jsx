import React, { useContext } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import useScrollInfinite from '../../Hooks/useScrollInfinite';
import useFetch from '../../Hooks/useFetch';
import { GetPhotos } from '../../api';
import { UserContext } from '../../Context/Context';

const Feed = ({ total }) => {
  const [modalPhoto, setModalPhoto] = React.useState();
  const [photos, setPhotos] = React.useState([]);
  const [infinite, setInfinite] = React.useState(true);
  const [stopPhoto, setStopPhoto] = React.useState(false);

  const { currentPage } = useScrollInfinite({ infinite });
  const { request, dados, loading, error } = useFetch();
  const { user } = useContext(UserContext);

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

      <FeedPhotos
        page={currentPage}
        setModalPhoto={setModalPhoto}
        dados={dados}
        loading={loading}
        error={error}
        photos={photos}
      />
    </section>
  );
};
export default Feed;
