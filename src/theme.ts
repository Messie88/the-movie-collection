import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  fontFamily: { Montserrat: 'Montserrat' },

  colors: {
    blue: '#0A1639',
    red: '#db1f30',
    lightBlue: '#3C7BF9',
    lightGrey: 'rgba(248, 249, 250, 0.1)',
    white: '#F8F9FA',
    darkWhite: '#F4F4F4',
  },

  responsive: {
    desktop: {
      valueString: '1024px',
      valueNumber: 1024,
    },
    tablet: {
      valueString: '768px',
      valueNumber: 768,
    },
    mobile: {
      valueString: '480px',
      valueNumber: 480,
    },
  },
}
