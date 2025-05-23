import { TOrderLineProps } from "../Types"
import CustomCounter from "./CustomCounter"
import RoundedButton from "./RoundedButton"
import EditIcon from '../../Assets/Images/EditIcon.svg'
import { useEffect } from "react"

const OrderLine = ({ orderLine, onAdd, onEdit, onDelete, onChangeQuantity }: TOrderLineProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '.5rem', padding: '.5rem 0' , justifyContent: 'space-between', maxWidth: '100%'}}>
      <div style={{
        width: '30%',
        flex: '1.5',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: '1.2rem',
        aspectRatio: '1/1'
      }}>
        <img src={orderLine.Image} style={{
          width: '70%',
          height: 'auto',
          objectFit: 'contain',
          margin: '1rem 1rem',
        }} />
      </div >
      <div style={{
        display: 'flex',
        flex: '2',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
          <span style={{ fontSize: '1.2rem' }}>{orderLine.ItenName}</span>
          <span style={{ fontSize: '1rem', color: '#8A8A8A' }}>{'$' + orderLine.LineTotal}</span>
        </div>
        <div style={{width: '2.5rem', justifySelf: 'flex-start'}}>
          <RoundedButton icon={EditIcon} />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flex: '3',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
          <CustomCounter fontSize="1.5rem" initialValue={orderLine.Quantity} onChange={(e) => {onChangeQuantity(e)}} />
        </div>
      </div>
    </div>
  )
}

export default OrderLine