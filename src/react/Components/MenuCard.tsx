import Style from '../Styles/MenuCard.module.css'
import BellIcon from '../../Assets/Images/BellIcon.svg'
import BellIconSelected from '../../Assets/Images/BellIconSelected.svg'

import { TMenuCardProps } from '../Types';

const MenuCard = ({onPress, title, itemsQty, selected = false}: TMenuCardProps) => {
    return (
        <button className={selected ? Style.cardSelected : Style.card} onClick={onPress}>
            <div className={selected ? Style.cardIconContainerSelected : Style.cardIconContainer}>
                <img src={selected ? BellIconSelected : BellIcon} alt='On/Off icon' className={Style.icon} />
            </div>
            <div className={Style.category}>{title}</div>
            <div className={Style.itemsCount}>{itemsQty}</div>
        </button>
    )
}

export default MenuCard