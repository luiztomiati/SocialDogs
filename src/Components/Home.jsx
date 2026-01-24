import React from 'react';
import { Link } from 'react-router-dom';
import FeedPhotos from './Feed/FeedPhotos';
import FeedModal from './Feed/FeedModal';

const Home = () => {
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
export default Home;
