import { Movie } from './../types/movie.d'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface userQuery {
  query?: string[]
  movies: Movie[]
}

const initialState: userQuery = {
  query: [],
  movies: [],
}

// FIND MOVIE BY ID
const selectedMovieById = (movies: Movie[], id: string) => {
  let selectedMovie = movies.find((movie) => movie.id === id)
  return selectedMovie
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilteredMovies: (state, action) => {
      state.movies = action.payload
    },
    getUserQuery: (state, action) => {
      state.query = action.payload
    },
    movieLikes: (state, action) => {
      const { movieId, count } = action.payload
      const selectedMovie = selectedMovieById(state.movies, movieId)
      if (selectedMovie) {
        selectedMovie.likes += count
      }
    },
    movieDislikes: (state, action) => {
      const { movieId, count } = action.payload
      const selectedMovie = selectedMovieById(state.movies, movieId)
      if (selectedMovie) {
        selectedMovie.dislikes += count
      }
    },
  },
})

export const {
  getFilteredMovies,
  movieLikes,
  movieDislikes,
  getUserQuery,
} = filtersSlice.actions

export const selectMoviesFilteredCategories = (state: RootState) =>
  state.filteredMovies.query

export const selectMovies = (state: RootState) => state.filteredMovies.movies

export default filtersSlice.reducer
