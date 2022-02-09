import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import "./shopcard.css"
import {BrowserRouter as Router, Link} from 'react-router-dom'

const ShopCard = ({name, place}) =>{
    // console.log(name);
    return (
        <Grid item component={Card} className="card" xs={12} md={3} >
            <CardContent className='cardcontent'>
                <Typography variant='h4'  gutterBottom >{name}</Typography>
                <Typography variant='h6'  gutterBottom > {place} </Typography>
                <Link to="/yourstore">
                    <Button variant="contained" color="primary" href="#"> visit shop </Button>
                </Link>
            </CardContent>
        </Grid>
    )
}

export default ShopCard
// a
