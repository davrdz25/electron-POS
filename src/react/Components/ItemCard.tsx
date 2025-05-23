import Style from '../Styles/ItemCard.module.css'
import { TItemCardProps } from '../Types'

export const ItemCard = ({ name, badgeColor, badgeFontColor, category, price, image, onPress }: TItemCardProps) => {
    return (
        <button className={Style.card} onClick={onPress} >
            <div className={Style.cardImage}>
                <img src={image} className={Style.image} alt='Breef crowich' />
            </div>
            <span className={Style.itemName}>{name}</span>
            <div className={Style.typePriceContainer}>
                <div style={{ backgroundColor: badgeColor, color: badgeFontColor }} className={Style.tag}>{category}</div>
                <div className={Style.price}>{price.toString()}</div>
            </div>
        </button>
    )
}