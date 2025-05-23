
import styles from '../Styles/Modal.module.css';
import RoundedButton from './RoundedButton';
import CloseIcon from '../../Assets/Images/CloseIcon.svg';
import { ModalProps } from '../Types';

const Modal = ({ isVisible, onClose, children, title}: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <RoundedButton onPress={onClose} icon={CloseIcon} bgColor='#FDF5F4' />
      </div>
       {children}
    </div>
  );
};

export default Modal;
