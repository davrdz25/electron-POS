import React from 'react'

import Style from '../Styles/CustomInput.module.css'
import { TCustomInputProps } from '../Types'

const CustomInput = ({ label, type, maxLength, value, rows, direction, onChange, placeholder, password, onPressEnter }: TCustomInputProps) => {
  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (String(event.key) === 'Enter' && onPressEnter)
      onPressEnter()
  }
  return (
    <div className={Style.inputContainer} style={{ flexDirection: direction, gap: direction === 'row' ? '1rem' : '.5rem' }}>
      {type === 'input' ?
      <>
      <label htmlFor='customInput' style={{ flex: direction === 'row' ? 1 : undefined }} className={Style.label}>{label}</label>
        <input type={password ? 'password' : undefined} style={{ flex: direction === 'row' ? 1 : undefined }} className={Style.input} id='customInput' maxLength={maxLength} value={value} placeholder={placeholder}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            handlePressEnter(event)
          }
          }

          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value)
            value = event.target.value
          }} />
          </>
        :
        <textarea className={Style.textArea} 
        maxLength={maxLength} rows={rows} value={value} placeholder={placeholder} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          onChange(event.target.value)
          value = event.target.value
        }} />}
    </div>
  )
}

export default CustomInput