import React from 'react';
import FeedPhotos from './Feed/FeedPhotos';
import FeedModal from './Feed/FeedModal';

const Home = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState();
  return (
    <section className="container">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} user={user} />
    </section>
  );
};
export default Home;
