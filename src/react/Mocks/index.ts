import { TItem, TItemCard, TMenucard } from "../Types"
import BellIcon from '../../Assets/Images/BellIcon.svg'
import BreefCrowich from '../../Assets/Images/BeefCrowich.png'
import SliceBlackForest from '../../Assets/Images/SliceBlackForest.png'

export const menuCards: TMenucard[] = [
    {
        Entry: 1,
        Name: "All items",
        itemsQuantity: 100,
        icon: BellIcon,
    },
]

export const itemCards: TItemCard[] = [
    {
        Entry: 1,
        Name: 'Breef crowich',
        badgeColor: '#FFF5E4',
        badgeFontColor: "#D69172",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 2,
        Name: 'Breef crowich',
        badgeColor: '#FFF1E6',
        badgeFontColor: "#E58C4A",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 3,
        Name: 'Breef crowich',
        badgeColor: '#E9FCEB',
        badgeFontColor: "#1C8370",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 4,
        Name: 'Breef crowich',
        badgeColor: '#FFEAEA',
        badgeFontColor: "#FC4A4A",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 5,
        Name: 'Breef crowich',
        badgeColor: '#FFE9F2',
        badgeFontColor: "#D26A98",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 6,
        Name: 'Breef crowich',
        badgeColor: '#FFFBE6',
        badgeFontColor: "#FFD966",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    },
    {
        Entry: 6,
        Name: 'Breef crowich',
        badgeColor: '#E6EEFF',
        badgeFontColor: "#2D71F8",
        category: 'Sandwich',
        price: 5.50,
        image: BreefCrowich
    }
]

export const items: TItem[] = [
    {
        Entry: 1,
        Code: 'BreefCrowich',
        Name: 'Breef Crowich',
        Description: 'Sabroso sándwich relleno de carne y verduras frescas.',
        Image: BreefCrowich,
        Price: 50.00,
        Category: {
            Entry: 1,
            Name: 'Sandwich',
            BackgroundColor: '#FFF5E4',
            FontColor: '#D69172'
        }
    },
    {
        Entry: 2,
        Code: 'SliceBlackForest',
        Name: 'Sliced Black Forest',
        Description: 'Sabroso sándwich relleno de carne y verduras frescas.',
        Image: SliceBlackForest,
        Price: 90.00,
        Category: {
            Entry: 1,
            Name: 'Pastry',
            BackgroundColor: '#FFE9F2',
            FontColor: '#D26A98'
        }
    }
]