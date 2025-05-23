import { useEffect, useState } from 'react';
import Style from '../Styles/Overlay.module.css'

import { TOverlay } from '../Types';

const Overlay = ({ visible }: TOverlay) => {
  const [shouldRender, setShouldRender] = useState(visible);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 15); 
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [visible]);

  return (
    shouldRender ? (
      <div className={`${Style.overlay} ${isVisible ? Style.show : Style.hide}`} />
    ) : <></>
  )
}

export default Overlay