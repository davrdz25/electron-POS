import AppStyle from './App.module.css'
import BellIcon from '../Assets/Images/BellIcon.svg'
import SandwichIcon from '../Assets/Images/SandwichIcon.svg'
import CalendarIcon from '../Assets/Images/CalendarIcon.svg'
import ClockIcon from '../Assets/Images/ClockIcon.svg'
import OnOffIcon from '../Assets/Images/OnOffIcon.svg'
import ReceiptIcon from '../Assets/Images/ReceiptIcon.svg'
import EditIcon from '../Assets/Images/EditIcon.svg'
import DownArrow from '../Assets/Images/DownArrow.svg'
import DisccountIcon from '../Assets/Images/DisccountIcon.svg'
import AddIcon from '../Assets/Images/AddIcon.svg'
import Sidebar from './Components/Sidebar'
import RoundedButton from './Components/RoundedButton'
import Overlay from './Components/Overlay'
import Badge from './Components/Badge'
import BadgeStyle from './Styles/Badge.module.css'
import BreefCrowich from '../Assets/Images/BeefCrowich.png'
import { useState } from 'react'
import Searchbar from './Components/Searchbar'
import MenuCard from './Components/MenuCard'
import { ItemCard } from './Components/ItemCard'
import FlatList from './Components/FlatList'
import FlatGrid from './Components/FlatGrid'
import UseTime from './Hooks/UseTime'
import UseDate from './Hooks/UseDate'

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

    const menuCards = [
        {
            Entry: 1,
            Name: "All items",
            itemsQuantity: 100,
            Icon: BellIcon,
        },
    ]

    const itemCards = [
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        },
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        },
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        },
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        },
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        },
        {
            Entry: 1,
            Name: 'Breef crowich',
            badgeColor: '#FFF5E4',
            badgeFontColor: "#D69172",
            category: 'Sandwich',
            price: '$5.50',
            image: BreefCrowich
        }
    ]

    const time = UseTime();
    const date = UseDate();

    return (
        <div className={AppStyle.mainView}>
            <Sidebar isOpen={sidebarVisible} onClose={() => {
                setSidebarVisible(false)
                setOverlayVisible(false)
            }} />
            <Overlay visible={overlayVisible} />
            <div className={AppStyle.mainContainer}>
                <div className={AppStyle.menuPanel}>
                    <div className={AppStyle.headerMenuPanel}>
                        <RoundedButton icon={SandwichIcon} onPress={() => {
                            setOverlayVisible(true);
                            setSidebarVisible(true);
                        }} />
                        <div className={AppStyle.dateTimeContainer}>
                            <Badge bgColor='#F0F9FF' text={date} icon={CalendarIcon} />
                            <span className={BadgeStyle.dateSeparator}>-</span>
                            <Badge bgColor='#F0F9FF' text={time} icon={ClockIcon} />
                        </div>
                        <Badge pressable bgColor='#FDF5F4' text='Close order' textColor='#FC4A4A' icon={OnOffIcon} />
                    </div>
                    <FlatList
                        showsHorizontalScrollIndicator
                        remSeparation={.5}
                        horizontal
                        keyExtractor={(item) => item.Entry.toString()}
                        data={menuCards}
                        renderItem={({ item }) => <MenuCard
                            title={item.Name}
                            key={item.Entry}
                            itemsQty={item.itemsQuantity.toString()}
                            icon={item.Icon}
                            onPress={() => { console.log('Press') }} />}
                    />
                    <Searchbar />
                    <FlatGrid
                        data={itemCards}
                        keyExtractor={(item) => item.Entry.toString()}
                        renderItem={({ item }) =>
                            <ItemCard
                                name={item.Name}
                                onPress={() => console.log('Pres')}
                                badgeColor={item.badgeColor}
                                badgeFontColor={item.badgeFontColor}
                                category={item.category}
                                price={item.price}
                                image={item.image}
                                key={item.Entry}
                            />
                        }
                    />
                </div>
                <div className={AppStyle.orderPanel}>
                    <div className={AppStyle.orderHeader}>
                        <button className={AppStyle.historyButton}>
                            <img className={AppStyle.btnIcon} src={ReceiptIcon} alt='Receipt icon' />
                        </button>
                        <span className={AppStyle.customerInfo}>Customer test</span>
                        <button className={AppStyle.historyButton}>
                            <img className={AppStyle.btnIcon} src={EditIcon} alt='Receipt icon' />
                        </button>
                    </div>
                    <div className={AppStyle.comboContainer}>
                        <div className={AppStyle.comboBox}>
                            <span className={AppStyle.comboLabel}>Select table</span>
                            <div className={AppStyle.comboButton}>
                                <img className={AppStyle.comboIcon} alt='Down button' src={DownArrow} />
                            </div>
                        </div>
                        <div className={AppStyle.comboBox}>
                            <span className={AppStyle.comboLabel}>Order type</span>
                            <div className={AppStyle.comboButton}>
                                <img className={AppStyle.comboIcon} alt='Down button' src={DownArrow} />
                            </div>
                        </div>
                    </div>
                    <div className={AppStyle.orderDetailsContainer}>
                        <div className={AppStyle.orderDetails}>
                            <span className={AppStyle.noItemsSelected}>No items selected</span>
                        </div>
                    </div>
                    <div className={AppStyle.subTotalContainer}>
                        <div className={AppStyle.subTotal}>
                            <span className={AppStyle.subTotal}>Subtotal</span>
                            <span className={AppStyle.subTotal}>$00.00</span>
                        </div>
                        <div className={AppStyle.subTotalBordered}>
                            <span className={AppStyle.tax}>Tax 10%</span>
                            <span className={AppStyle.tax}>$00.00</span>
                        </div>
                        <div className={AppStyle.subTotal}>
                            <span className={AppStyle.total}>TOTAL</span>
                            <span className={AppStyle.total}>$00.00</span>
                        </div>
                    </div>
                    <div className={AppStyle.promoPayment}>
                        <div className={AppStyle.comboBox}>
                            <span className={AppStyle.comboLabel}>Add promo or voucher</span>
                            <button className={AppStyle.comboButton}>
                                <img className={AppStyle.disccountIcon} alt='Disccount Icon' src={DisccountIcon} />
                            </button>
                        </div>
                        <button className={AppStyle.paymentButton}>Payment method</button>
                    </div>
                    <div className={AppStyle.placeOrder}>
                        Place order
                    </div>
                </div>
            </div>
            <div className={AppStyle.trackOrderBtn}>
                <span className={AppStyle.trackOrderLabel}>
                    Track order
                </span>
                <div className={AppStyle.trackOrderAdd}>
                    <img className={AppStyle.icon} src={AddIcon} alt='AddIcon' />
                </div>
            </div>
        </div>
    );
}

export default App;

