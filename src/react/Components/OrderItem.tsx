import BreefCrowich from '../../Assets/Images/BeefCrowich.png'
import CustomInput from './CustomInput'

import Tag from './Tag'
import { TItem } from '../Types'
import CustomCounter from './CustomCounter'

type OrderLineProps = {
    item: TItem,
    onChangeQuantity: (qty:number) => void 
}

const OrderItem = ({item, onChangeQuantity}: OrderLineProps) => {
  return (
    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center',
                        maxWidth: '100%',
                        margin: '0 .5rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            width: '100%',
                            maxWidth: 'min(90vw, 30rem)',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#F7F7F7',
                            borderRadius: '2rem',
                            padding: '2rem 3rem',
                        }}>
                            <img
                            src={item.Image}
                            style={{
                                width: '75%',
                                objectFit: 'contain',
                                aspectRatio: '16/9'
                            }}
                        />
                        </div>
                        <Tag bgColor={item.Category.BackgroundColor} fontColor={item.Category.FontColor} text={item.Category.Name} />
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.Name}</div>
                        <span
                            style={{
                                fontSize: '1rem',
                                color: '#8A8A8A',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            {item.Description}
                        </span>
                        <span style={{ fontSize: '1.5rem', color: '#2D71F8' }}>{'$ ' + item.Price.toFixed(2)}</span>
                        <CustomInput value='' rows={4} placeholder='Add your notes here' onChange={() => { }} type='textarea' />
                        <CustomCounter initialValue={1} onChange={(e) => onChangeQuantity(e)} />
                    </div>
                </div>
  )
}

export default OrderItem