import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import CreateRegistration from './CreateRegistration';

const CreateAccount = () => {
  const { login } = useContext(UserContext);
  return (
    <section>
      {login ? <Navigate to="MyAccount" /> : <CreateRegistration />}
    </section>
  );
};
export default CreateAccount;
