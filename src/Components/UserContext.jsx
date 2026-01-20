import React, { useCallback } from 'react';
import { PostToken, GetUser, PostValidateToken } from '../api';
import { UserContext } from '../Context/Context';

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  const GetLogin = useCallback(async (token) => {
    try {
      setLoading(true);
      const { url, options } = GetUser(token);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Erro: Usúario não foi encontrado');
      }
      const result = await response.json();
      setUser(result);
      setLogin(true);
    } catch (e) {
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const FetchToken = useCallback(
    async ({ username, password }) => {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = PostToken({ username, password });
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Erro: Usúario ou senha incorretos');
        }
        const result = await response.json();
        localStorage.setItem('token', result.token);
        setToken(result.token);
        await GetLogin(result.token);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [GetLogin],
  );

  const logout = useCallback(() => {
    setError(null);
    setLoading(false);
    setUser(null);
    setLogin(false);
    localStorage.removeItem('token');
  }, []);

  React.useEffect(() => {
    async function valiTokenLocalStorage() {
      const localStorageToken = localStorage.getItem('token');
      if (!localStorageToken) return;
      const { url, options } = PostValidateToken(localStorageToken);
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Erro: token não autorizado');
        }
        await GetLogin(localStorageToken);
      } catch (e) {
        setError(e.message);
        logout();
      } finally {
        setLoading(false);
      }
    }
    valiTokenLocalStorage();
  }, [GetLogin, logout]);

  return (
    <UserContext.Provider
      value={{
        FetchToken,
        GetLogin,
        user,
        token,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
