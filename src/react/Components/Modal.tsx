
import styles from '../Styles/Modal.module.css';
import RoundedButton from './RoundedButton';
import CloseIcon from '../../Assets/Images/CloseIcon.svg';

interface ModalProps {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isVisible, onClose, children, title }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <RoundedButton onPress={onClose} icon={CloseIcon} bgColor='#FDF5F4' />
      </div>
      <div className={styles.content}>
          {children}
      </div>
    </div>
  );
};

export default Modal;
