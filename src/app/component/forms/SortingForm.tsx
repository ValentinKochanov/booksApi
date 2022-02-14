import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'

interface CategoryFormProp{
  setSortedBy: React.Dispatch<React.SetStateAction<string>> 
}

const SortingForm = ({setSortedBy}: CategoryFormProp) => {
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="Sorting-by">
        Sorting by
      </InputLabel>
      <NativeSelect
        defaultValue={'relevance'}
        inputProps={{
          name: 'Sorting by',
          id: 'Sorting-by',
        }}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
          setSortedBy(event.target.value)
        }}
      >
        <option value={'relevance'}>relevance</option>
        <option value={'newest'}>newest</option>
      </NativeSelect>
    </FormControl>
  )
}

export default SortingForm