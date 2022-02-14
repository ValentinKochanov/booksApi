import { Box, Button, Grid, Input, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../component/books/booksSlice'
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import Image from '../../static/img/banner.jpg'
import CategoryForm from './forms/CategoryForm';
import SortingForm from './forms/SortingForm';

const Header:FC = () => {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [sortedBy, setSortedBy] = useState("relevance")

  const disableButton = useSelector((state: RootState) => state.books.status)
  const dispatch = useDispatch()
  let navigate = useNavigate();
  
  function handleSetSearch(e:React.ChangeEvent<HTMLInputElement>){
    setQ(e.target.value)
  }

  const handleSetBooks = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchBooks({q, category, sortedBy}))
    setQ("")
    e.preventDefault()
    navigate("books/")
  }

  return (
    <Box sx={{
      backgroundImage: `url(${Image})`,
      height: '230px',
      textAlign: 'center',
    }}>
      <Grid container 
      direction="row"
      justifyContent="center"
      sx={{
        pt: '15px',
      }}>
        <Grid item xs={12}>
          <Typography variant='h3'>
            Search for books
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="contained-button-file">
            <Input 
            id="contained-button-file"
            value={q} 
            onChange={handleSetSearch}
            />
            <Button onClick={handleSetBooks} disabled={disableButton === "loading"}>
              <SearchIcon fontSize='large'/>
            </Button>
          </label>        
        </Grid>
        <Grid item xs={2}
        sx={{ 
          pt: '10px',
        }}>
          <CategoryForm setCategory={setCategory}/>
        </Grid>
        <Grid item xs={2}
        sx={{
          pt: '10px',
        }}>
          <SortingForm setSortedBy={setSortedBy}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header;
