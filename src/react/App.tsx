import AppStyle from './App.module.css'
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
import { useEffect, useState } from 'react'
import Searchbar from './Components/Searchbar'
import MenuCard from './Components/MenuCard'
import { ItemCard } from './Components/ItemCard'
import FlatList from './Components/FlatList'
import FlatGrid from './Components/FlatGrid'
import UseTime from './Hooks/UseTime'
import UseDate from './Hooks/UseDate'
import { menuCards, items } from './Mocks'
import Modal from './Components/Modal'
import OrderItem from './Components/OrderItem'
import CustomButton from './Components/CustomButton'
import { TItem, TOrder, TOrderLine } from './Types'
import OrderLine from './Components/OrderLine'

const App = () => {

    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

    const [order, setOrder] = useState<TOrder>({
        Number: -1,
        CustomerCode: '',
        CustomerName: '',
        Type: 'D',
        Date: '',
        Time: '',
        Total: 0.0,
    });

    const [orderLine, setOrderLine] = useState<TOrderLine>({
        LineNum: -1,
        ItemEnty: -1,
        ItemCode: '',
        ItenName: '',
        Image: '',
        Price: 0.00,
        Comments: '',
        Quantity: 0,
        LineTotal: 0.0
    });

    const [orderLines, setOrderLines] = useState<TOrderLine[]>([]);

    const [itemSelectec, setItemSelected] = useState<TItem>({
        Entry: -1,
        Code: '',
        Name: '',
        Description: '',
        Price: 0.00,
        Image: '',
        Category: {
            Entry: -1,
            Name: '',
            BackgroundColor: '',
            FontColor: ''
        }
    });

    const [modalVisible, setmodalVisible] = useState<boolean>(false)

    const addOrderLine = (newLine: TOrderLine) => {
        const lineNum = orderLines.length + 1;

        console.log("orderLine no updated", orderLine)
        console.log("orderLine lineNu, lineTotal ", lineNum)

        setOrderLine({
            ...orderLine,
            LineNum: lineNum,
        })

        setOrderLines((prevLines) => [...prevLines, newLine]);
        setmodalVisible(false);
    }

    const handleTotal = () => {
        const total = orderLines.reduce((sum, line) => sum + line.LineTotal, 0);

        setOrder(prev => ({
            ...prev,
            Total: total
        }));

        console.log("order state", { ...order, Total: total });
    };

    const deleteItem = (lineNum: number) => {
        setOrderLines(prev => prev.filter(orderLine => orderLine.LineNum !== lineNum));
    };


   const updateLine = (lineNum: number, newQuantity: number) => {
    console.log("orderLines before update: ", orderLines, lineNum, newQuantity);

    setOrderLines(prevLines =>
        prevLines
            .map(line =>
                line.LineNum === lineNum
                    ? {
                        ...line,
                        Quantity: newQuantity,
                        LineTotal: newQuantity * line.Price,
                    }
                    : line
            )
            .filter(line => line.Quantity > 0)
    );

    setTimeout(() => {
        console.log("orderLines after update: ", orderLines);
    }, 100);
};


    const time = UseTime();
    const date = UseDate();

    useEffect(() => {
        setOrder({
            ...order,
            Number: 1,
            CustomerCode: 'MOST',
            CustomerName: 'Cliente mostrador',
            Date: date,
            Time: time,
            Total: 0,
        })
    }, [])

    useEffect(() => {
        handleTotal()
    }, [orderLines]);

    return (
        <div className={AppStyle.mainView}>
            <Sidebar isOpen={sidebarVisible} onClose={() => {
                setSidebarVisible(false)
                setOverlayVisible(false)
            }} />
            <Modal title='Order detail' onClose={() => setmodalVisible(false)} isVisible={modalVisible}>
                <OrderItem item={itemSelectec} onChangeQuantity={(qty) => {
                    setOrderLine({
                        ...orderLine,
                        Quantity: qty,
                        Price: itemSelectec.Price,
                        LineTotal: qty * itemSelectec.Price
                    })
                }} />
                <CustomButton fillWidth bgColor='#2D71F8' fontColor='#FFFFFF' title='Add to order' onPress={() => { addOrderLine(orderLine) }} />
            </Modal>
            <Overlay visible={overlayVisible || modalVisible} />
            <div className={AppStyle.mainContainer}>
                <div className={AppStyle.menuPanel}>
                    <div className={AppStyle.headerMenuPanel}>
                        <RoundedButton icon={SandwichIcon} bgColor='#FFFFFF' onPress={() => {
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
                            icon={item.icon}
                            onPress={() => { console.log('Press') }} />}
                    />
                    <Searchbar />
                    <FlatGrid
                        data={items}
                        keyExtractor={(item) => item.Entry.toString()}
                        renderItem={({ item }) =>
                            <ItemCard
                                name={item.Name}
                                onPress={() => {
                                    console.log(item)
                                    setItemSelected(item)
                                    setmodalVisible(true);
                                    setOrderLine({
                                        ...orderLine,
                                        ItemEnty: item.Entry,
                                        ItemCode: item.Code,
                                        ItenName: item.Name,
                                        Image: item.Image,
                                        Price: item.Price,
                                        LineTotal: item.Price,
                                        Quantity: 1,
                                    })
                                    console.log("onAdd item ", orderLine)
                                }}
                                badgeColor={item.Category.BackgroundColor}
                                badgeFontColor={item.Category.FontColor}
                                category={item.Category.Name}
                                price={'$' + item.Price.toFixed(2)}
                                image={item.Image}
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
                        {
                            orderLines?.length === 0 ?
                                <span className={AppStyle.noItemsSelected}>No items</span>
                                :
                                <FlatList
                                    horizontal={false}
                                    remSeparation={.5}
                                    data={orderLines}
                                    keyExtractor={(item) => item.LineNum.toString()}
                                    renderItem={({ item }) =>
                                        <OrderLine
                                            orderLine={item}
                                            onChangeQuantity={(e) => {
                                                console.log("Quantity changed", e)
                                                updateLine(item.LineNum, e)
                                            }}
                                        />
                                    }
                                />
                        }
                    </div>
                    <div className={AppStyle.subTotalContainer}>
                        {/* <div className={AppStyle.subTotal}>
                            <span className={AppStyle.subTotal}>Subtotal</span>
                            <span className={AppStyle.subTotal}>$00.00</span>
                        </div>
                        <div className={AppStyle.subTotalBordered}>
                            <span className={AppStyle.tax}>Tax 10%</span>
                            <span className={AppStyle.tax}>$00.00</span>
                        </div> */}
                        <div className={AppStyle.subTotal}>
                            <span className={AppStyle.total}>TOTAL</span>
                            <span className={AppStyle.total}>{'$ ' + order.Total}</span>
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