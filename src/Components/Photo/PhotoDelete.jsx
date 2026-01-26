import React from 'react';
import Button from '../../Components/Forms/Button';
import { DelPhoto } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Errors from '../../helpers/Errors';
import ModalYesNo from '../../helpers/ModalYesNo';

const PhotoDelete = ({ id }) => {
  const { request, loading, error } = useFetch();
  const [openModal, setOpenModal] = React.useState(false);
  async function handleDeleteConfirm() {
    const token = localStorage.getItem('token');
    const { url, options } = DelPhoto(id, token);
    const { response } = await request(url, options);
    if (response.ok) {
      window.location.reload();
    }
  }
  return (
    <>
      {openModal && (
        <ModalYesNo
          setOpenModal={setOpenModal}
          disabled={loading === true ? true : false}
          onConfirm={handleDeleteConfirm}
        />
      )}
      <Button onClick={() => setOpenModal(true)} size={'sm'} variant={'danger'}>
        {loading === true ? 'Deletando...' : 'Deletar'}
      </Button>
      {error && <Errors error={error} />}
    </>
  );
};
export default PhotoDelete;
