import Style from '../Styles/CustomButton.module.css'

type TButtonProps = {
    title: string;
    onPress: () => void;
    fontColor: string;
    bgColor: string;
}
const CustomButton = ({title, onPress, fontColor, bgColor}: TButtonProps) => {
  return (
    <button className={Style.button} style={{color: fontColor, backgroundColor: bgColor}} onClick={onPress}>
      <label className={Style.label}>{title}</label>
    </button>
  )
}

export default CustomButton