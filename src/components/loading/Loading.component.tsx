import React from 'react'

import * as S from './Loading.Styled'

const Loading = () => {
  return (
    <S.Loading>
      <S.Dot delay='0s' />
      <S.Dot delay='0.1s' />
      <S.Dot delay='0.2s' />
    </S.Loading>
  )
}

export default Loading
