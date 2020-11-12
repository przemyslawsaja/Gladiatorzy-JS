import styled from 'styled-components'

export const FooterWrapper = styled.div`
display: flex;
justify-content: center;
  align-items: center;
 position: relative;
  bottom: 0;
  left:0;
  height: 400px;
  width: 100%;
  background-color: ${({theme}) => theme.grey1};
  color: #fff;
`
export const Copyright = styled.div`
 position: absolute; 
 left: 50%;
 transform: translateX(-50%);
 bottom: 0;
 text-align: center;
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`