// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: { Montserrat: string }

    colors: {
      blue: string
      red: string
      lightBlue: string
      lightGrey: string
      white: string
      darkWhite: string
    }

    responsive: {
      desktop: {
        valueString: string
        valueNumber: number
      }
      tablet: {
        valueString: string
        valueNumber: number
      }
      mobile: {
        valueString: string
        valueNumber: number
      }
    }
  }
}
