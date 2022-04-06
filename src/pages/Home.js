import { Container, Grid, Input } from '@mui/material'
import React from 'react'
import MovieCard from '../components/MovieCard'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query='

const Home = () => {
  return (
    <div>
      <Grid container>
        <Input placeholder="Search a movie " type='search' sx={{margin:"1rem auto", width:"50%"}}/>
      </Grid>

      <Container>
        <MovieCard/>
      </Container>
      
    </div>
  )
}

export default Home