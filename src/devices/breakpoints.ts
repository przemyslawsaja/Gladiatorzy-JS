import { IBreakpoints } from '../__types__/IBreakpoints';

const size:IBreakpoints = {     
  mobileS: '320px',     
  mobileM: '375px',     
  mobileL: '425px',     
  tablet: '768px',     
  laptop: '1024px',      
  laptopL: '1400px',
  laptopM: '1800px',     
  desktop: '2560px' 
}; 

  export const device:IBreakpoints = {     
    mobileS: `(min-width: ${size.mobileS})`,     
    mobileM: `(min-width: ${size.mobileM})`,     
    mobileL: `(min-width: ${size.mobileL})`,     
    tablet: `(min-width: ${size.tablet})`,     
    laptop: `(min-width: ${size.laptop})`, 
    laptopL: `(min-width: ${size.laptopL})`,     
    laptopM: `(min-width: ${size.laptopM})`, 
    desktop: `(min-width: ${size.desktop})`, 
  };