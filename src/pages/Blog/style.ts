import styled from 'styled-components';
import { device } from '../../devices/breakpoints'

export const BlogWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  width: 100%;
  @media ${device.laptop} { 
    width: 1000px;
  }
`
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const FilterValue = styled.p`
  text-decoration: underline;
`
export const BlogPosts = styled.div`
  position: relative;
  display: grid;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
  justify-content: center;

`