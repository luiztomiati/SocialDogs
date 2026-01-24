import React from 'react';
import Send from '../Assets/enviar.svg?react';
import { PostComment } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Errors from '../../helpers/Errors';
import styles from './PhotoFormComments.module.css';
import Button from '../Forms/Button';

const PhotoFormComment = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();
  async function SendComment(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const { url, options } = PostComment(id, { comment }, token);
      const { response, result } = await request(url, options);
      if (response.ok) {
        setComment('');
        setComments((comment) => [...comment, result]);
      }
    }
  }
  return (
    <div style={styles.formWrapper}>
      <form onSubmit={SendComment} className={styles.form}>
        <label htmlFor="comment">Comentário</label>
        <div className={styles.actions}>
          <textarea
            className={styles.textArea}
            id="comment"
            name="comment"
            placeholder="Digite o comentário..."
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          ></textarea>
          {error && <Errors error={error} />}
          <Button type={'submit'} className={styles.button}>
            <Send />
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PhotoFormComment;
