import Style from '../Styles/RoundedButton.module.css'

import { TRoundedButton } from '../Types'

const RoundedButton = ({icon, bgColor, onPress}: TRoundedButton) => {
  return (
    <button className={Style.button} style={{backgroundColor: bgColor}} onClick={onPress}>
        <img src={icon} alt='button' className={Style.icon} />
    </button>
  )
}

export default RoundedButton