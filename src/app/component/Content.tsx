import React, { FC } from 'react'
import BooksList from './books/BooksList'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { incrementStartIndex, loadMoreBooks } from './books/booksSlice'

const Content:FC = () => {
  const books = useSelector((state: RootState) => state.books.setBooks)
  const error = useSelector((state: RootState) => state.books.error)
  const totalItems = useSelector((state: RootState) => state.books.totalItems)
  const status = useSelector((state: RootState) => state.books.status)
  const dispatch = useDispatch()

  const handleMoreBooks = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(incrementStartIndex())
    dispatch(loadMoreBooks())
  }
  
  const buttonMore = <Button 
    variant="contained"
    onClick={handleMoreBooks}
    >Load more
    </Button>

  return ( 
    <Box sx={{ paddingTop: 2 }}>
      <Box textAlign="center">
        {status === 'loading' && <CircularProgress />}
        {error && <Typography color='red'>{error}</Typography>}
        {totalItems >= 0 && 
          <Typography variant='h5'>Found {totalItems} results</Typography>}
      </Box>
      <BooksList books={books}/>
      <Box sx={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        padding: "20px",
      }}>
        { totalItems > 30 ? buttonMore : ''}
      </Box>
    </Box>
  )
}

export default Content
