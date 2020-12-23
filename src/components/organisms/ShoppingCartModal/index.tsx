import React, { FC, useState } from 'react'
import H1 from '../../atoms/H1';
import Svg from '../../atoms/svg';
import Icon from '../../atoms/Icon'
import logo from '../../../assets/icons/logo.svg'
import Button from '../../atoms/Button'
import CartItem from '../../molecules/CartItem';
import {
  TotalPrice,
  CartHeader,
  CartDetails,
  CartButtons,
  CartItemsTags,
  CartItemsCounter,
  CartModalWrapper,

} from './style'
import { AllDevicesButton } from '../navigation/style';


interface IShoppingCartModal {
  ToogleCartModal: () => void
}
export const ShoppingCartModal:FC<IShoppingCartModal> = ({ToogleCartModal}) => {
  const [ShoppingCartItems, setCartItems ] = useState([
    {id: '1', title: 'Java - kurs od podstaw', quantity: 1, price: 49.99},
    {id: '2', title: 'React - kurs od podstaw', quantity: 1, price: 39.99},
    {id: '3', title: 'Gatsby.js - kompletny kurs', quantity: 1, price: 89.99}
  ])
  const CartItemsNumber = ShoppingCartItems.length;
  let CartItemsTotalPrice = 0;
  return (
    <CartModalWrapper>
      <CartHeader>
          <Svg scale={1.1} icon={logo} alt="GladiatorzyJS" />
          <AllDevicesButton onClick={() => ToogleCartModal()} >
            <Icon size={2} color="#000" className="fas fa-times" /> 
          </AllDevicesButton>
          
      </CartHeader>
      <CartDetails>
        <H1>Twój koszyk</H1>
        <CartItemsCounter>Ilosć przedmiotów w koszyku: {CartItemsNumber}</CartItemsCounter>
      </CartDetails>

      <CartItemsTags>
        <h4>Nazwa</h4>
        <h4>Ilość</h4>
        <h4>Cena</h4>
      </CartItemsTags>

        {ShoppingCartItems.map(e => {
          CartItemsTotalPrice += e.price;
          return <CartItem title={e.title} quantity={e.quantity} price={e.price} key={e.id} />
        })}

       <TotalPrice>
          Suma: {CartItemsTotalPrice} zł
       </TotalPrice>

      <CartButtons>
        <Button secondary onClick={() => setCartItems([])}>Wyczyść({CartItemsNumber})</Button>
        <Button>Kup przedmioty</Button>
      </CartButtons>
    </CartModalWrapper>
  )
}
