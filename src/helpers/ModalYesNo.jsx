import Button from '../Components/Forms/Button';
import styles from './ModalYesNo.module.css';
import Warning from '../../src/Components/Assets/warning.svg?react';

const ModalYesNo = ({
  phrase = 'Deseja realizar esta ação?',
  onConfirm,
  setOpenModal,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>
          <Warning />
        </div>
        <p>{phrase}</p>

        <div className={styles.actions}>
          <Button
            size={'md'}
            variant={'success'}
            onClick={() => {
              onConfirm();
              setOpenModal(false);
            }}
          >
            Sim
          </Button>
          <Button
            size={'md'}
            variant={'danger'}
            onClick={() => setOpenModal(false)}
          >
            Não
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ModalYesNo;
