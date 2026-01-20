import React from 'react';
import { UserContext } from '../Context/Context';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === false) {
    return <Navigate to="/Login" />;
  } else if (login === true) {
    return children;
  } else {
    return <></>;
  }
};

export default ProtectedRouter;
