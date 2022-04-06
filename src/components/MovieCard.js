import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({title, poster_path, overview, vote_average}) => {

  const {currentUser} = useContext(AuthContext)

  return (
    <Card sx={{ maxWidth: 270, margin:"0.5rem" }}>
      <CardMedia
        component="img"
        height="380"
        image={poster_path ? IMG_API + poster_path : defaultImage }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {overview}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser ? (
          <Avatar>{vote_average}</Avatar>
        ):null}
      </CardActions>
    </Card>
  );
}

export default MovieCard