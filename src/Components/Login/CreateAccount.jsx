import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import CreateRegistration from './CreateRegistration';
import Head from '../../helpers/Head';

const CreateAccount = () => {
  const { login } = useContext(UserContext);
  return (
    <section>
      <Head
        title={'Cadastrar'}
        description={
          'Crie sua conta para acessar todas as funcionalidades do sistema de forma simples e segura.'
        }
      />
      {login ? <Navigate to="MyAccount" /> : <CreateRegistration />}
    </section>
  );
};
export default CreateAccount;
