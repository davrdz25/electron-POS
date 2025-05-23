import Style from '../Styles/CustomButton.module.css'
import { TButtonProps } from '../Types'

const CustomButton = ({title, onPress, fontColor, bgColor, disabled, fillWidth,borderRadious}: TButtonProps) => {
  return (
    <button disabled={disabled} className={Style.button} style={{color:fontColor, backgroundColor: bgColor, width: fillWidth ? '100%' : '', borderRadius: borderRadious}} onClick={onPress}>
      <label className={Style.label}>{title}</label>
    </button>
  )
}

export default CustomButton