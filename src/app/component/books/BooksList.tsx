import React, { FC } from 'react'
import BooksItem from './BooksItem'
import { IBooks } from '../../type/typeBooks'
import { Grid } from '@mui/material'

interface BooksListProps{
  books?: IBooks[];
}

const BooksList:FC<BooksListProps> = ({books}) => {
  return (
    <Grid container spacing={4} sx={{pt: 1}}>
      {books && books.map((el, index) => <BooksItem key={el.id + index} data={el} />)}
    </Grid>
  )
}

export default BooksList
