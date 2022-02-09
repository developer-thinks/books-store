import React from 'react'
import './addnewbook.css'
import Button from '@material-ui/core/Button';
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react';


const AddNewBook = () => {

    const nevigate = useNavigate()
    const [bookName, setBookName] = useState("")
    const [shopName, setShopName] = useState("")
    const [bookId, setBookId] = useState("")

    const handleAddBook = (event) =>{
        event.preventDefault()

        Axios.post('http://localhost:5000/api/newbook', {
            bookName,
            shopName,
            bookId
        }).then(response=>{
            // console.log(response);
        })
        nevigate('/yourstore')
    }

  return (
    <div className='addbook'>
        <div className='newbooktitle'>
            <h3>Register New Book</h3>
        </div>
        <form className='form'>
            <label>Book Name :</label>
            <input type="text" value={bookName} onChange={(e)=> setBookName(e.target.value)} placeholder='bookname'  />
            <label>Shop Name :</label>
            <input type="text" value={shopName} onChange={(e)=> setShopName(e.target.value)} placeholder='shopname'  />
            <label> Id :</label>
            <input type="text" value={bookId} onChange={(e)=> setBookId(e.target.value)} placeholder='bookname'  />
            <Button variant="contained" color="primary" onClick={handleAddBook} > Add book </Button>
        </form>
    </div>
  )
}

export default AddNewBook