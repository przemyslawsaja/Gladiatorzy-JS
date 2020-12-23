import React, {FC} from 'react'
import Icon from '../../atoms/Icon';
import { theme } from '../../../theme/mainTheme';
import { ICartItem } from '../../../__types__/ICartItem';
import { CartItemWrapper, CartItemValue } from './style'

const CartItem:FC<ICartItem> = ({title, quantity, price}) => {
  return (
    <CartItemWrapper>
      <CartItemValue>{title}</CartItemValue>
      <CartItemValue>{quantity}</CartItemValue>
      <CartItemValue>{price} zł</CartItemValue>
      <CartItemValue>
        <Icon size={1.5} color={theme.error} className="fas fa-trash-alt" /> 
      </CartItemValue>
    </CartItemWrapper>
  )
}
export default CartItem;
