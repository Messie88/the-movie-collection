import React, { useState } from 'react'

import {
  useAppDispatch,
  useAppSelector,
  useMoviesFilteringMethod,
} from '../../app/hooks'
import {
  movieLikes,
  movieDislikes,
  selectMovies,
  getFilteredMovies,
  getUserQuery,
} from '../../app/features/filteredMoviesSlice'

import * as S from './Card.styled'

interface Props {
  id: string
  title: string
  image: string
  category: string
  likes: number
  dislikes: number
}

const Card = ({ id, title, image, category, likes, dislikes }: Props) => {
  const [isClicked, setIsClicked] = useState({
    like: false,
    dislike: false,
  })
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)

  let remainingMovies
  const deleteMovie = () => {
    remainingMovies = movies.filter((item) => item.id !== id)
    dispatch(getFilteredMovies(remainingMovies))
  }

  const handleLikes = () => {
    setIsClicked({
      like: !isClicked.like,
      dislike: false,
    })

    if (!isClicked.like) {
      dispatch(movieLikes({ movieId: id, count: 1 }))
    } else if (isClicked.like) {
      dispatch(movieLikes({ movieId: id, count: -1 }))
    }
  }

  const handleDislikes = () => {
    setIsClicked({
      like: false,
      dislike: !isClicked.dislike,
    })
    if (!isClicked.dislike) {
      dispatch(movieDislikes({ movieId: id, count: 1 }))
    } else if (isClicked.dislike) {
      dispatch(movieDislikes({ movieId: id, count: -1 }))
    }
  }

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={image} alt='' />
      </S.ImageContainer>
      <S.DeleteButton id='delete' onClick={deleteMovie}>
        <img src='/assets/delete.png' alt='' />
      </S.DeleteButton>
      <h3>{title}</h3>
      <S.BottomContainer>
        <p id='pastille' onClick={() => dispatch(getUserQuery(category))}>
          {category}
        </p>
        <div>
          <S.Likability>
            <img
              src={
                isClicked.like
                  ? '/assets/like-active-icon.svg'
                  : '/assets/like-icon.svg'
              }
              alt=''
              onClick={handleLikes}
            />
            <p>{isClicked.like ? likes + 1 : likes}</p>
          </S.Likability>
          <S.Likability>
            <img
              src={
                isClicked.dislike
                  ? '/assets/dislike-active-icon.svg'
                  : '/assets/dislike-icon.svg'
              }
              alt=''
              onClick={handleDislikes}
            />
            <p>{isClicked.dislike ? dislikes + 1 : dislikes}</p>
          </S.Likability>
        </div>
      </S.BottomContainer>
    </S.Container>
  )
}

export default Card
