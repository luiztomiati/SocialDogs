import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import HeaderOfAccount from '../User/HeaderOfAccount';
import Feed from '../Feed/Feed';
import CreatedPost from './CreatedPost';
import Statistics from './Statistics';

const MyAccount = () => {
  return (
    <section className="container">
      <HeaderOfAccount />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="CreatedPost" element={<CreatedPost />}></Route>
        <Route path="Statistics" element={<Statistics />}></Route>
      </Routes>
    </section>
  );
};
export default MyAccount;
