import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { UserContext } from '../../Context/Context';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState();
  return (
    <section className="container">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </section>
  );
};
export default Feed;
