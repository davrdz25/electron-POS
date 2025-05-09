import {useEffect, useState } from 'react';
import Style  from '../Styles/ModalMessage.module.css'
import { TModalMessage } from '../Types';

const AlertMessage = ({ type = 'info', title, description, visible, onClose, duration = 3000 }: TModalMessage) => {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    let timer: any;
    if (visible) {
      setShouldRender(true);
      timer = setTimeout(onClose, duration);
    }
    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  const handleAnimationEnd = () => {
    if (!visible) setShouldRender(false);
  };

  return shouldRender ? (
    <div
    className={`${Style.alertMessage} ${Style[type]} ${visible ? Style.fadeIn : Style.fadeOut}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={Style.alertContent}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <button className={Style.closeButton} onClick={onClose}>×</button>
    </div>
  ) : null;
};

export default AlertMessage;
