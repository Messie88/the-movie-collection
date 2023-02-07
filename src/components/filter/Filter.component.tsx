import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '../../app/hooks'
import { getUserQuery } from '../../app/features/filteredMoviesSlice'

import * as S from './Filter.styled'

interface Props {
  categories: string[]
}

const Filters = ({ categories }: Props) => {
  // const memoizedPastilles = useAppSelector(selectFilters)
  const [options, setOptions] = useState<string[]>([])
  // Convert the checkbox into a controlled input
  const [isOptionChecked, setIsOptionChecked] = useState<boolean[]>(
    new Array(categories.length).fill(false)
  )
  const [click, setClick] = useState(false)
  const dispatch = useAppDispatch()

  const handleOptions = (PastilleIndex: number, indexedPastille: string) => {
    const updatedCheckedState = isOptionChecked.map((item, index) =>
      index === PastilleIndex ? !item : item
    )

    setIsOptionChecked(updatedCheckedState)

    if (options.includes(indexedPastille)) {
      const result = options.filter((item) => item !== indexedPastille)
      dispatch(getUserQuery(result))
      return setOptions(result)
    } else {
      dispatch(getUserQuery([...options, indexedPastille]))
      return setOptions((prev) => [...prev, indexedPastille])
    }
  }

  return (
    <S.Container>
      <S.Content show={click}>
        {categories.map((pastille, idx) => (
          <div key={idx}>
            <label htmlFor={pastille}>{pastille}</label>
            <input
              type='checkbox'
              value={pastille}
              name={pastille}
              checked={isOptionChecked[idx]}
              onChange={() => {
                handleOptions(idx, pastille)
              }}
            />
          </div>
        ))}
      </S.Content>
      <S.Button onClick={() => setClick(!click)}>
        {click ? 'Close' : 'Open filters'}
      </S.Button>
    </S.Container>
  )
}

export default Filters
