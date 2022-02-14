import { Card, CardContent, CardMedia, Link, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link as LinkRoute} from 'react-router-dom'
import { IBooks } from '../../type/typeBooks'

interface BooksItemProps{
  data?: IBooks;
}
const BooksItem:FC<BooksItemProps> = ({data}) => {
  const item = data?.volumeInfo
  return (
    <Grid item xs={6} md={4}>
      <LinkRoute to={`/books/${data?.id}`}>
        <Card 
          sx={[
            {
              '&:hover': {
                cursor: "pointer"
              },
            }
          ]}
        >
          <CardMedia
            component="img"
            height="300"
            image={item?.imageLinks?.smallThumbnail}
            alt={item?.title}
            sx={{
              width: 'auto',
              margin: 'auto',
            }}
            />
            <CardContent>
              <Link underline="none">
                {item?.categories ? item?.categories[0] : ""}
              </Link>
              <Typography sx={{fontWeight: "700"}}>
                {item?.title}
              </Typography>
              <Typography>
                {item?.authors}
              </Typography>
            </CardContent>
        </Card>
      </LinkRoute>
    </Grid>
  )
}

export default BooksItem
