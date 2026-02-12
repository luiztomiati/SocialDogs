import React from 'react';
import Head from '../../helpers/Head';
import useFetch from '../../Hooks/useFetch';
import { GetStats } from '../../api';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';
const Graphs = React.lazy(() => import('./Graphs'));

const Statistics = () => {
  const { dados, error, request, loading } = useFetch();
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (token == null) {
      return;
    }
    async function getData() {
      const { url, options } = GetStats(token);
      await request(url, options);
    }
    getData();
  }, [request, token]);
  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (dados) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title={'Estaísticas'}
          description={
            'Acompanhe suas estatísticas e tenha uma visão clara do seu desempenho no sistema.'
          }
        />
        <Graphs dados={dados} />
      </React.Suspense>
    );
  } else {
    return null;
  }
};

export default Statistics;
