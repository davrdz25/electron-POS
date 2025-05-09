import React from 'react'

import Style from '../Styles/CustomInput.module.css'


type CustomInputProps = {
    label: string
    type: 'input' | 'label'
    maxLength?: number
    rows?: number
    direction: 'row' | 'column'
    value: string
    onChange: (e: string) => void
    placeholder?: string
    password?: boolean
}

const CustomInput = ({label, type, maxLength, value, rows, direction, onChange, placeholder, password}: CustomInputProps) => {
  return (
    <div className={Style.inputContainer} style={{flexDirection: direction, gap: direction === 'row' ? '1rem' : '.5rem'}}>
        <label htmlFor='customInput' style={{flex: direction === 'row' ? 1 : undefined}} className={Style.label}>{label}</label>
        {type === 'input' ? 
        <input type={password ? 'password' : undefined} style={{flex: direction === 'row' ? 1 : undefined}} className={Style.input} id='customInput' maxLength={maxLength} value={value} placeholder={placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value)
            value = event.target.value
        }}/> 
        : 
        <textarea className={Style.input} maxLength={maxLength} rows={rows} value={value} placeholder={placeholder} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange(event.target.value)
            value = event.target.value
        }} />}
    </div>
  )
}

export default CustomInput