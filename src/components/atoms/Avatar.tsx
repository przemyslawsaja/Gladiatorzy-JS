import styled from 'styled-components'

const Avatar = styled.div<{img: string}>`
  height: 100px;
  width: 100px;
  background-image: url( ${({img}) => img} );
  background-size: cover;
`
export default Avatar