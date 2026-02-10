import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import HeaderOfAccount from '../User/HeaderOfAccount';
import Home from '../Home';
import CreatedPost from './CreatedPost';
import Statistics from './Statistics';
import NotFound from '../../helpers/NotFound';

const MyAccount = () => {
  const { user } = React.useContext(UserContext);
  return (
    <section className="container">
      <HeaderOfAccount />
      <Routes>
        <Route path="/" element={<Home user={user.id} total={6} />}></Route>
        <Route path="CreatedPost" element={<CreatedPost />}></Route>
        <Route path="Statistics" element={<Statistics />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  );
};
export default MyAccount;
