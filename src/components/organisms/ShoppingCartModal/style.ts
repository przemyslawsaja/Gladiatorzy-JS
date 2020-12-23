import styled from 'styled-components'

export const CartModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  background: #fff;
  overflow-y: scroll;
 
`
export const CartHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const CartItemsCounter = styled.p`
  margin: -10px 0 10px 0;
`
export const CartItemsTags = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  gap: 20px;
`
export const CartButtons = styled.div`
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  gap: 10px;
  justify-content: space-between;
`
export const TotalPrice = styled.div`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #d6d6d6;
  text-align: right;
  padding: 10px 30px;
  margin-bottom: 100px;
`
