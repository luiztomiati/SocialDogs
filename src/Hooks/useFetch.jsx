import React, { useCallback } from 'react';

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let result;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url, options);
      result = await response.json();
      if (!response.ok) throw new Error(result.message);
    } catch (e) {
      result = null;
      setError(e.message);
    } finally {
      setDados(result);
      setLoading(false);
    }
    return { response, result };
  }, []);
  return {
    dados,
    loading,
    error,
    request,
  };
};

export default useFetch;
