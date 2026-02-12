import styles from './Graphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const Graphs = ({ dados }) => {
  const graphData =
    dados?.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    }) ?? [];
  const sum =
    dados != null
      ? dados.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
      : 0;

  return (
    <section className={styles.graph}>
      <div className={styles.sum}>
        <p>Acessos:{sum}</p>
      </div>
      <div className={styles.graphsItens}>
        <VictoryPie
          data={graphData}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, rigth: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '333',
            },
          }}
        />
      </div>
      <div className={styles.graphsItens}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphData}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};
export default Graphs;
