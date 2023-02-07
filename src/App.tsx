import React, { useState, useEffect } from 'react'

import { movies$ } from './app/data/movies'
import { Movie } from './app/types/movie'

import CardList from './components/card-list'
import Filter from './components/filter'
import {
  useAppDispatch,
  useMoviesFilteringMethod,
  useAppSelector,
} from './app/hooks'
import {
  getFilteredMovies,
  selectMovies,
} from './app/features/filteredMoviesSlice'

import './App.css'

function App() {
  let [movies, setMovies] = useState<Movie[]>()
  let [moviesCategories, setMoviesCategories] = useState<string[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchedMovies = async () => {
      let listMovies: any = await movies$
      let response = await listMovies

      if (!movies) setMovies(response)
      dispatch(getFilteredMovies(response))
      // Retreive movies categories
      response.map((movie: Movie) =>
        setMoviesCategories((prev) => [...prev, movie.category])
      )
    }

    fetchedMovies()
  }, [])

  let filtered = useAppSelector(selectMovies)

  useEffect(() => {
    if (filtered) {
      setMovies(filtered)
    }
  }, [filtered])

  // Make movies categories redendancy free
  const moviesCategoriesRedendancyFree: string[] = Array.from(
    new Set(moviesCategories.map((category: string) => category))
  )

  const filteredData = useMoviesFilteringMethod(movies)

  return (
    <>
      <h3 id='title'>THE MOVIE COLLECTION</h3>
      <div id='content'>
        <Filter categories={moviesCategoriesRedendancyFree} />
        <CardList list={filteredData ? filteredData : movies} />
      </div>
    </>
  )
}

export default App
