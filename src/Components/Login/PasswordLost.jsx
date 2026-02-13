import Input from '../Forms/Input';
import useFetch from '../../Hooks/useFetch';
import { PasswordLostPost } from '../../api';
import useForm from '../../Hooks/useForm';
import styles from '../css/Form.module.css';
import Button from '../Forms/Button';
import Loading from '../../helpers/Loading';
import Errors from '../../helpers/Errors';
import Head from '../../helpers/Head';
import stylesLost from './PasswordLost.module.css';

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
  if (loading) return <Loading />;
  return (
    <section className={stylesLost.Wrapper}>
      <Head
        title={'Esqueceu a senha'}
        description={'Solicitar a troca de senha'}
      />
      <div className="FormBox">
        {dados != null ? (
          <p>
            Se o login existir em nossa base, você receberá um email com
            instruções para redefinir sua senha.
          </p>
        ) : (
          <div className={stylesLost.LostContent}>
            <form onSubmit={sendEmail}>
              <h1 className="Title formContent ">Esqueceu a Senha</h1>
              <Input
                className={styles.Input}
                Id="username"
                placeholder="Digite o usuário ou email"
                type="text"
                size="md"
                {...login}
              >
                Login / Email
              </Input>
              <Button type="submit" disabled={loading}></Button>
            </form>
          </div>
        )}
        {error && <Errors error={error} />}
      </div>
    </section>
  );
};
export default PasswordLost;
