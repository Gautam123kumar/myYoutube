import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Football"/>
      <Button name="Valentines"/>
    </div>
  )
}

export default ButtonList