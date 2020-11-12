import styled from 'styled-components'
import loupe from '../../../assets/icons/loupe.svg'
import { device } from '../../../devices/breakpoints'

export const CardWrapper = styled.div`
  justify-self: center;
  margin: 20px 0;
  min-height: 485px;
  width: 300px;
  position: relative;
  border-radius: 0px 0px 4px 4px;
  -webkit-box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);
  -moz-box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);
  box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);

`
export const ImageWrapper = styled.div<{img: string}>`

  background-image: url( ${({img})=> img} );
  background-size: cover;
  width: 100%;
  height: 192px;
  left: 0px;
  top: 0px;
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
  background: linear-gradient(180deg, rgba(247, 225, 65, 0.9) 0%, rgba(247, 225, 65, 0.9) 100%), url( ${({img})=> img}), #C4C4C4;
  opacity: 0.9;

    &::after{
      content: "";
      width: 70px;
      height: 70px;
      
      background: url(${loupe}) no-repeat;
    }
  }
`
export const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`
export const DataContainer = styled.div`
  background-color: ${({theme})=> theme.primmary};
  width: 100px;
  text-align: center;
  
`
export const TagsContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 20px;
`
export const Tag = styled.div`
  border: 1px solid #E4E6EA;
  padding: 5px;
  &::before{
    content: '#'
  }
`