import styled from 'styled-components'

export const CartItemWrapper = styled.ul`
  width: 100%;
  padding: 20px 0 20px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #F0F0F0;
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.33);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.33);
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.33);
  align-items:center;
  margin: 20px 0;
  transition: 0.3s;

  &:hover{ 
    background: #E0E0E0;
  }
`
export const CartItemValue = styled.li`
  justify-self: center;
  list-style: none;
`