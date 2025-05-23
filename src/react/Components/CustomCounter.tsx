import RoundedButton from "./RoundedButton"
import MinusIcon from '../../Assets/Images/MinusIcon.svg'
import PlusIcon from '../../Assets/Images/PlusIcon.svg'
import { useEffect, useState } from "react"
import { TCounterProps } from "../Types"

const CustomCounter = ({ onChange, initialValue, minValue, maxValue, fontSize}: TCounterProps) => {
    const [count, setCount] = useState<number>(initialValue)

    useEffect(() => {   
        console.log("Counter initital value on render", initialValue)
        if (initialValue)
            setCount(initialValue)
        
    }, [])
    
    const updateCount = (newValue: number) => {
        console.log("Counter initital value on change", initialValue, newValue)

        setCount(newValue)
        onChange(newValue)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', backgroundColor: '#F7F7F7', color: '#000000', borderRadius: '4rem', padding: '.5rem',width: '100%'}}>
            <RoundedButton icon={MinusIcon} bgColor='#FFFFFF' onPress={() => {
                if (count > 0)
                    updateCount(count - 1)
            }} />
            <span style={{display:'flex', alignItems: 'center', textAlign: 'center', fontSize: (fontSize ? fontSize : '2rem' )}}>{count}</span>
            <RoundedButton icon={PlusIcon} bgColor='#FFFFFF' onPress={() => {
                updateCount(count + 1)
            }} />
        </div>
    )
}

export default CustomCounter