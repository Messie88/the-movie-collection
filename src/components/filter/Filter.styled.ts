import styled from 'styled-components'

export const Container = styled.form`
  @media screen and (max-width: ${({ theme }) =>
      theme.responsive.tablet.valueString}) {
    z-index: 2;
    position: absolute;
    display: flex;
  }
`

export const Button = styled.span`
  display: none;
  position: relative;
  top: 20px;

  @media screen and (max-width: ${({ theme }) =>
      theme.responsive.tablet.valueString}) {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0 10px 10px 0;

    padding: 3px;
    height: 30px;
    cursor: pointer;
  }
`

export const Content = styled.div<{ show: boolean }>`
  height: 100vh;
  width: 200px;
  padding: 50px 20px;
  background: ${({ theme }) => theme.colors.white};

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input {
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.responsive.tablet.valueString}) {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`
