import styled, { keyframes } from 'styled-components'

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`
export const Dot = styled.div<{ delay: string }>`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`
