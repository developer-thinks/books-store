import React, { useState } from 'react'
import {Card, CardContent, Typography, Grid, CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'
import Axios from 'axios'
// import Image from '@material-ui/core/ImageList'
import Image from 'mui-image'
// import env from "react-dotenv";


import './shopcontent.css'
import { useEffect } from 'react';

const ShopContent = () => {

  const [books, setBooks] = useState([])

  const fetchBooks = ()=>{

    Axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript+inauthor:keyes&key=AIzaSyBbxPLBieobPNR5GVWk4eOnLJxImmjruAE')
    .then(response=>{
      console.log(response);
    })
  }

  useEffect(()=>{
      Axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript+inauthor:keyes&key=AIzaSyBbxPLBieobPNR5GVWk4eOnLJxImmjruAE')
    .then(response=>{
      console.log(response.data.items);
      setBooks(response.data.items)
    })
  },[])

  return (

    <div>
      <Grid container spacing={3} justifyContent="center">
        {
          books ?
          books.map((book, key)=>{
            return (
              <Grid item component={Card} className="card" xs={12} md={3}>
                <CardContent className='cardcontent'>
                  <Image src={book.volumeInfo.imageLinks.smallThumbnail}  />
                <Typography variant='p'  gutterBottom >{book.volumeInfo.title}</Typography>
                <Typography variant='h6'  gutterBottom > 10 books left </Typography>
                 <Button variant="contained" color="primary" target="_blank" href={book.volumeInfo.previewLink}> view </Button>
            </CardContent>
        </Grid>
            )
          }) : <h2> Loading </h2>
        }
      </Grid>
    </div>
  )
}

export default ShopContent