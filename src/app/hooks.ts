import { Movie } from './types/movie.d'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'
import { selectMoviesFilteredCategories } from './features/filteredMoviesSlice'

// REDUX HOOKS
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// FILTER CUSTOM HOOK

export const useMoviesFilteringMethod = (movies: Movie[] | undefined) => {
  const userQuery = useAppSelector(selectMoviesFilteredCategories)
  const [filteredData, setFilteredData] = useState<Movie[] | undefined>(movies)

  useEffect(() => {
    const filtered = movies?.filter(function (item: { [x: string]: any }) {
      return Array.isArray(userQuery) && userQuery.length !== 0
        ? userQuery?.some(function (key) {
            if (
              typeof item.category === 'string' &&
              item.category.includes(key)
            ) {
              return true
            }
            return false
          })
        : typeof userQuery === 'string' && item.category.includes(userQuery)
    })

    if (filtered && filtered.length > 0) {
      setFilteredData(filtered)
    } else if (
      userQuery &&
      userQuery.length > 0 &&
      filtered &&
      filtered.length === 0
    ) {
      setFilteredData(undefined)
    } else {
      setFilteredData(movies)
    }
  }, [userQuery])

  return filteredData
}
