import React, { useContext } from 'react';
import PhotoFormComment from './PhotoFormComment';
import { UserContext } from '../../Context/Context';
import styles from './PhotoComments.module.css';
import User from '../Assets/usuario.svg?react';

const PhotoComments = ({ id, comments }) => {
  const { login } = useContext(UserContext);
  const [stComments, setStComments] = React.useState(() => comments);
  return (
    <>
      <ul className={styles.comments}>
        {stComments.map((item) => (
          <li key={item.comment_ID}>
            {
              <div className={styles.content}>
                <div className={styles.userIcon}>
                  <User />
                </div>
                <div className={styles.information}>
                  <b>{item.comment_author}:</b>
                  <span>{item.comment_content}</span>
                  <span className={styles.date}>
                    {new Date(item.comment_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            }
          </li>
        ))}
      </ul>
      {login && <PhotoFormComment id={id} setComments={setStComments} />}
    </>
  );
};
export default PhotoComments;
