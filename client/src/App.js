import { Grid, Button} from '@material-ui/core';
import './App.css';
import ShopCard from './components/ShopCard';

import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Header from './components/Header';

import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom'
import RegisterShop from './components/RegisterShop';
import { useEffect } from 'react';
import Axios from 'axios';
import ShopContent from './components/ShopContent';


function App() {

  const [bookStore, setBookStore] = useState([])
  // bookStore.push({"name":"sapna books"})
  // bookStore.push({"name":"Vijaya books"})
  // bookStore.push({"name":"Amazon kindle"})
  // bookStore.push({"name":"google books"})
  // bookStore.push({"name":"evergreen books"})
  // bookStore.push({"name":"mantri square"})

  useEffect(async()=>{
    Axios.get('http://localhost:5000/api/getallshops').then(response=>{
      // console.log(response);
       setBookStore(response.data.shops)
    })
  },[bookStore])

  const AvailableShops = ()=>{
    return(
      <>

      <div className='addshop'>
      <Link to="/register">
        <Button className='button_addshop' variant="contained" color="transparent" href="#">
          <AddIcon />
          Add Your shop 
        </Button>
      </Link>
      </div>  
      <Grid container spacing={3} justifyContent="center">
      {
        bookStore ?
        bookStore.map((stores, key)=>{
          return(
            <ShopCard key={key} name={stores.storeName} place={stores.city} />
          )
        })
        :
        <h2>Loading</h2>
      }
      </Grid>
      </>
    )
  }

  return (
    <div className="container">
      <Router>
      <Header />
      
      {/* <AvailableShops /> */}
      <Routes>
          <Route exact path='/' element={<AvailableShops />} />
          <Route path='/register' element={<RegisterShop />} />
          <Route path='/yourstore' element={<ShopContent />} />
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
 