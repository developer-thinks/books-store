import React, { useState } from 'react'
import { useEffect } from 'react';
import {Card, CardContent, Typography, Grid, CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, Route, Routes, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import Image from 'mui-image'
import AddIcon from '@material-ui/icons/Add';
import './shopcontent.css'


const ShopContent = () => {

  const [books, setBooks] = useState([])

  const fetchBooks = ()=>{

    Axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript+inauthor:keyes&key=AIzaSyBbxPLBieobPNR5GVWk4eOnLJxImmjruAE')
    .then(response=>{
      console.log(response);
    })
  }

  // useEffect(()=>{
  //     Axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript+inauthor:keyes&key=AIzaSyBbxPLBieobPNR5GVWk4eOnLJxImmjruAE')
  //   .then(response=>{
  //     console.log(response.data.items);
  //     setBooks(response.data.items)
  //   })
  // },[])
  useEffect(()=>{
    Axios.get('http://localhost:5000/api/allbooks').then(response=>{
      setBooks(response.data.books)
    })
  },[books])

  return (

    <div className='shopcontent'>
      <div className='addbook'>
       <Link to='/addbook' style={{textDecoration: 'none', color:'white'}}>
        <Button variant="contained" color="primary" target="_blank" > <AddIcon />  Add book </Button>
       </Link>
      </div>
      <div className='books'>
         <Grid container spacing={3} justifyContent="center">
        {
          books ?
          books.map((book, key)=>{
            return (
        //       <Grid item component={Card} className="card" xs={12} md={3}>
        //         <CardContent className='cardcontent'>
        //           <Image src={book.volumeInfo.imageLinks.smallThumbnail}  />
        //         <Typography variant='p'  gutterBottom >{book.volumeInfo.title}</Typography>
        //         <Typography variant='h6'  gutterBottom > 10 books left </Typography>
        //          <Button variant="contained" color="primary" target="_blank" href={book.volumeInfo.previewLink}> view </Button>
        //     </CardContent>
        // </Grid>

              <Grid item component={Card} className="card" xs={12} md={3}>
                <CardContent className='cardcontent'>
                  {/* <Image src={}  /> */}
                <Typography variant='h5'  gutterBottom >{book.bookName}</Typography>
                <br />
                <Typography variant='p'  gutterBottom > 10 books left </Typography>
                 <Button variant="contained" color="primary" target="_blank" >view </Button>
            </CardContent>
        </Grid>

            )
          }) : <h2> Loading </h2>
        }
      </Grid>
      </div>
    </div>
  )
}

export default ShopContent