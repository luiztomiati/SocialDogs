import React from 'react';
import Button from './Button';
import styles from '../css/Form.module.css';
import Input from './Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/Context';
import Errors from '../../helpers/Errors';
import stylesBtn from '../css/Button.module.css';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const username = useForm();
  const password = useForm();

  const { FetchToken, error, loading } = React.useContext(UserContext);
  async function PostTokenLogin(event) {
    event.preventDefault();
    if (!username.validate() || !password.validate()) {
      return;
    } else {
      FetchToken({
        username: username.value,
        password: password.value,
      });
    }
  }
  return (
    <div className="container">
      <form onSubmit={PostTokenLogin} className={styles.FormLogin}>
        <div className="FormBox">
          <h1 className="Title formContent ">Acesse sua conta</h1>
          <Input
            className={styles.Input}
            Id="username"
            placeholder="Digite o usúario ou email"
            type="text"
            size="md"
            {...username}
          >
            Usúario
          </Input>
          <Input
            className={styles.Input}
            Id="password"
            placeholder="Digite a senha"
            type="password"
            size="md"
            {...password}
          >
            Senha
          </Input>
          {error && <Errors error={error} />}
          <div className={styles.containerBtnActions}>
            <Link className={stylesBtn.ButtonPasswordLost} to={'Create'}>
              esqueceu a senha?
            </Link>
            {loading ? (
              <Button className={stylesBtn.ButtonLogin} disabled={true}>
                Carregando...
              </Button>
            ) : (
              <Button className={stylesBtn.ButtonLogin} type="Submit">
                Logar
              </Button>
            )}
            <div className={styles.ActionCreateAccont}>
              <Link className={stylesBtn.ButtonCreate} to={'Create'}>
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
