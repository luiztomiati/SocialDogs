import React from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../../Components/Forms/Input';
import styles from '../css/Button.module.css';
import Button from '../../Components/Forms/Button';
import useFetch from '../../Hooks/useFetch';
import { PhotoPost } from '../../api';
import Errors from '../../helpers/Errors';
import styleCreated from '../css/CreatePost.module.css';
import stylesForm from '../css/Form.module.css';
import { useNavigate } from 'react-router-dom';

const CreatedPost = () => {
  const nome = useForm();
  const idade = useForm('number');
  const peso = useForm('number');
  const navigate = useNavigate();

  const [img, setImg] = React.useState(0);
  const { dados, loading, error, request } = useFetch();

  React.useEffect(() => {
    if (dados) {
      navigate('/MyAccount');
    }
  }, [dados, navigate]);
  function Send(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);
    formData.append('img', img.raw);
    const token = localStorage.getItem('token');
    const { url, options } = PhotoPost(formData, token);
    request(url, options);
  }

  function HandleFileChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={styleCreated.SectionPost}>
      <form onSubmit={Send}>
        <Input
          className={stylesForm.Input}
          Id="Nome"
          placeholder="Digite o nome"
          type="text"
          size="md"
          {...nome}
        >
          Nome
        </Input>
        <Input
          Id="Idade"
          className={stylesForm.Input}
          placeholder="Digite a idade"
          type="number"
          size="md"
          {...idade}
        >
          Idade
        </Input>
        <Input
          className={stylesForm.Input}
          Id="Peso"
          placeholder="Digite o peso"
          type="number"
          size="md"
          {...peso}
        >
          Peso
        </Input>
        <input
          className={styleCreated.Files}
          type="file"
          id="img"
          name="img"
          onChange={HandleFileChange}
        ></input>
        {error && <Errors error={error} />}
        {loading ? (
          <div>
            <Button disabled={true} className={styles.primary}>
              Carregando...
            </Button>
          </div>
        ) : (
          <div>
            <Button type="submit" className={styles.primary}>
              Enviar
            </Button>
          </div>
        )}
      </form>
      <div className={styleCreated.ContainerPreview}>
        {img.preview ? (
          <div
            className={styleCreated.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        ) : (
          <div className={styleCreated.previewUndefined}>
            Área de pré-visualização da imagem
          </div>
        )}
      </div>
    </section>
  );
};
export default CreatedPost;
