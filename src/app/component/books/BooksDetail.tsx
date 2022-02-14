import { Box, Button, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';

const BooksDetail:FC = () => {

  let navigate = useNavigate();
  let params = useParams()
  let book = useSelector((state: RootState) => state.books.setBooks.find(
    item => item.id === params.id))

  useEffect(() => {
    if(!book){
      navigate("/")
    }
  },[book, navigate])

  return (
    <>
      <Button 
        variant="contained" 
        sx={{ mt: '10px'}}
        onClick={()=> navigate('/books')}
      >
        К списку
      </Button>
      <Box container 
      component={Grid}
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
      sx={{
        pt: '20px',
      }}>
        <CardMedia
          component="img"
          height="350"
          image={book?.volumeInfo.imageLinks?.smallThumbnail}
          alt={book?.volumeInfo.title}
          sx={{
            width: 'auto',
          }}
          
        />
        <CardContent sx={{
          maxWidth: '50vw',
          pt: "0"
        }}>
          <Link underline="none">
            {book?.volumeInfo.categories}
          </Link>
          <Typography variant='h5' sx={{
            pt:"10px",
          }}>
            {book?.volumeInfo.title}
          </Typography>
          <Typography sx={{
            pt:"10px",
          }}>
            {book?.volumeInfo.authors}
          </Typography>
          <Typography sx={{
            pt:"10px",
          }}>
            {book?.volumeInfo.description}
          </Typography>
        </CardContent>
      </Box>
    </>
  )
}

export default BooksDetail