import Style from '../Styles/Badge.module.css'
import { TBadgeProps } from '../Types'

const Badge = ({ bgColor, icon, text, textColor = '#000000', pressable = false, onPress }: TBadgeProps) => {
    return (
        pressable ?
            <button className={Style.badge} onClick={onPress}>
                <div className={Style.iconContainer} style={{ backgroundColor: bgColor }}>
                    <img src={icon} alt='Calendar icon' className={Style.icon} />
                </div>
                <div className={Style.text} style={{ color: textColor }}>{text}</div>
            </button>

            :

            <div className={Style.badge}>
                <div className={Style.iconContainer} style={{ backgroundColor: bgColor }}>
                    <img src={icon} alt='Calendar icon' className={Style.icon} />
                </div>
                <div className={Style.text} style={{ color: textColor }}>{text}</div>
            </div>
    )
}

export default Badge