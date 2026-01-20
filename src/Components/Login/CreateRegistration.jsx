import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import styles from '../css/Form.module.css';
import Button from '../Forms/Button';
import stylesBtn from '../css/Button.module.css';
import useFetch from '../../Hooks/useFetch';
import { PostCreateUser } from '../../api';
import { UserContext } from '../../Context/Context';
import Errors from '../../helpers/Errors';

const CreateRegistration = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { FetchToken } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();

  async function CreateUser(event) {
    event.preventDefault();
    const { url, options } = PostCreateUser({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok)
      await FetchToken({ username: username.value, password: password.value });
  }

  return (
    <div className="container">
      <form onSubmit={CreateUser} className={styles.FormLogin}>
        <div className="FormBox">
          <h1 className="Title formContent">Criar conta</h1>
          <Input
            className={styles.Input}
            Id="username"
            placeholder="Digite o usúario"
            type="text"
            size="md"
            {...username}
          />
          <Input
            className={styles.Input}
            Id="email"
            placeholder="Digite o email"
            type="email"
            size="md"
            {...email}
          />
          <Input
            className={styles.Input}
            Id="password"
            placeholder="Digite a senha"
            type="password"
            size="md"
            {...password}
          />
          {error && <Errors error={error} />}
          {loading ? (
            <div>
              <Button className={stylesBtn.secundary} disabled={true}>
                Carregando...
              </Button>
            </div>
          ) : (
            <div>
              <Button className={stylesBtn.secundary} type="submit">
                Cadastrar
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default CreateRegistration;
