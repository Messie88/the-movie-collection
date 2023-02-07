import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: calc(100% - 200px);
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  @media screen and (max-width: ${({ theme }) =>
      `${theme.responsive.mobile.valueNumber}px`}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0.75em;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.responsive.tablet.valueString}) {
    width: 100%;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`
