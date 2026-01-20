import React from 'react';
import { Link } from 'react-router-dom';
import FeedPhotos from './Feed/FeedPhotos';

const Home = () => {
  return (
    <section className="container">
      <FeedPhotos />
    </section>
  );
};
export default Home;
