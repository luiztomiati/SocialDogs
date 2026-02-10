import Input from '../Forms/Input';
import useFetch from '../../Hooks/useFetch';
import { PasswordLostPost } from '../../api';
import useForm from '../../Hooks/useForm';
import styles from '../css/Form.module.css';
import Button from '../Forms/Button';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';

const PasswordLost = () => {
  const login = useForm();
  const { request, error, loading, dados } = useFetch();
  async function sendEmail(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PasswordLostPost({
        login: login.value,
        url: window.location.href.replace('PasswordLost', 'reset'),
      });
      await request(url, options);
    }
  }
  return (
    <section className="container">
      <h1 className="Title formContent ">Esqueceu a Senha</h1>
      <p>Digite o login ou email cadastrado.</p>
      <div className="FormBox">
        {dados != null ? (
          <p>Enviado com sucesso!</p>
        ) : (
          <form onSubmit={sendEmail}>
            <Input
              className={styles.Input}
              Id="username"
              placeholder="Digite o usúario ou email"
              type="text"
              size="md"
              {...login}
            >
              Login / Email
            </Input>
            {loading ? (
              <Button disabled={true}>Carregando...</Button> && <Loading />
            ) : (
              <Button type="Submit">Logar</Button>
            )}
          </form>
        )}
        {error && <Errors error={error} />}
      </div>
    </section>
  );
};
export default PasswordLost;
