import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'

interface CategoryFormProp{
  setCategory: React.Dispatch<React.SetStateAction<string>> 
}

const CategoryForm = ({setCategory}: CategoryFormProp) => {
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Category
      </InputLabel>
      <NativeSelect
        defaultValue={'all'}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
          setCategory(event.target.value)
        }}
        inputProps={{
          name: 'Category',
          id: 'uncontrolled-native',
        }}
      >
        <option value={'all'}>all</option>
        <option value={'art'}>art</option>
        <option value={'biography'}>biography</option>
        <option value={'computers'}>computers</option>
        <option value={'history'}>history</option>
        <option value={'medical'}>medical</option>
        <option value={'poetry'}>poetry</option>
      </NativeSelect>
    </FormControl>
  )
}

export default CategoryForm