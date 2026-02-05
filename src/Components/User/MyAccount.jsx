import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import HeaderOfAccount from '../User/HeaderOfAccount';
import Home from '../Home';
import CreatedPost from './CreatedPost';
import Statistics from './Statistics';

const MyAccount = () => {
  const { user } = React.useContext(UserContext);
  return (
    <section className="container">
      <HeaderOfAccount />
      <Routes>
        <Route path="/" element={<Home user={user.id} />}></Route>
        <Route path="CreatedPost" element={<CreatedPost />}></Route>
        <Route path="Statistics" element={<Statistics />}></Route>
      </Routes>
    </section>
  );
};
export default MyAccount;
