import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 10px;

  h3 {
    margin: 10px 0;
  }

  &:hover {
    #delete {
      display: block;
    }
  }
`
export const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const DeleteButton = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: none;
  background: white;
  border-radius: 10px;
  padding: 5px;

  img {
    object-fit: contain;
    height: 100%;
  }
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;

    &#pastille {
      cursor: pointer;
      padding: 2px 5px;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.lightBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  div {
    display: flex;

    &:first-child {
      border-right: 1px solid gray;
    }
  }
`

export const Likability = styled.div`
  display: flex;
  padding: 0 5px;
  height: 20px;

  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  p {
    padding-left: 5px;
  }
`
