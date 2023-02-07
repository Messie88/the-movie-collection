import React from 'react'

import { Movie } from '../../app/types/movie'

import Card from '../card'

import * as S from './CardList.styled'
import Loading from '../loading'

interface Props {
  list?: Movie[]
}

const CardList = ({ list }: Props) => {
  console.log('LIST', list)

  return (
    <S.Container>
      {!list?.length ? (
        <Loading />
      ) : (
        list?.map((item: Movie, index) => (
          <div key={index}>
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              likes={item.likes}
              dislikes={item.dislikes}
            />
          </div>
        ))
      )}
    </S.Container>
  )
}

export default CardList
