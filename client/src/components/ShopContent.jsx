import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'

import './shopcontent.css'

const ShopContent = () => {
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} className="card" xs={12} md={3}>
        <CardContent className='cardcontent'>
                <Typography variant='h4'  gutterBottom >Book Image</Typography>
                <Typography variant='h6'  gutterBottom > 10 books left </Typography>
                <Link to="/yourstore">
                    <Button variant="contained" color="primary" href="#"> view </Button>
                </Link>
            </CardContent>
        </Grid>

        
      </Grid>
    </div>
  )
}

export default ShopContent