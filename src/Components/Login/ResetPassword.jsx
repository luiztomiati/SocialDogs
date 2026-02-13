import React, { useState } from 'react';
import Head from '../../helpers/Head';
import Button from '../Forms/Button';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { PasswordReset } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import stylesLost from './PasswordLost.module.css';
import styles from '../Forms/Form.module.css';
const ResetPassword = () => {
  const [login, setLogin] = useState();
  const [key, setKey] = useState();
  const password = useForm('password');
  const navigate = useNavigate();
  const { loading, error, request } = useFetch();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PasswordReset({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }
  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  return (
    <section className={stylesLost.Wrapper}>
      <Head
        title={'Redefinir senha'}
        description={
          'Crie uma nova senha de acesso para sua conta com segurança.'
        }
      />
      <div className={stylesLost.LostContent}>
        <form onSubmit={handleSubmit}>
          <h1 className="Title">Resetar Senha</h1>
          <Input
            className={styles.Input}
            Id="password"
            placeholder="Digite a senha"
            type="password"
            size="md"
            {...password}
          >
            Nova senha
          </Input>
          {!loading ? (
            <Button type={'submit'}>Resetar</Button>
          ) : (
            <Button disabled={true}>Resetando...</Button>
          )}
        </form>
      </div>
    </section>
  );
};
export default ResetPassword;
