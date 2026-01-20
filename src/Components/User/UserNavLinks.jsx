import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/HeaderNav.module.css';
import Feed from '../Assets/Feed.svg?react';
import Statistic from '../Assets/Estatisticas.svg?react';
import Post from '../Assets/Adicionar.svg?react';
const UserNavLinks = () => (
  <nav className={styles.Nav}>
    <NavLink to="" end>
      <Feed />
    </NavLink>
    <NavLink to="statistics">
      <Statistic />
    </NavLink>
    <NavLink to="CreatedPost">
      <Post />
    </NavLink>
  </nav>
);
export default UserNavLinks;
