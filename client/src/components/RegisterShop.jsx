import { useState } from "react";
import './registershop.css'
import Axios from 'axios'

const RegisterShop = ()=>{

    const [storeName, setStoreName] = useState("");
    const [place, setPlace] = useState("");
    const [email, setEmail] = useState("");


    const handleFormSubmission = (e) =>{
        e.preventDefault()
        // const {storeName, place, email} 
        Axios.post('http://localhost:5000/api/register', {
            storeName, city : place, email
        }).then(response=>{
            console.log(response);
        })
    }

    return (

        <div className="app">
          <h2>Register Your Shop : </h2>
          {/* <div className='container'> */}
            <div className="user_details">
            <label>shop name :</label>
            <input
              className="input_label" 
              type = "text" 
              value={storeName} 
              onChange={(e)=>setStoreName(e.target.value)}  
              placeholder="Enter shop name" 
            />
            </div>
            <div className="user_details">
            <label>place :</label>
            <input
              className="input_label" 
              type = "text" 
              value={place} 
              onChange={(e)=>setPlace(e.target.value)} 
              placeholder="Enter place" 
            />
            </div>
    
            <div className="user_details">
            <label>Email :</label>
            <input
              className="input_label" 
              type = "email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder="Enter Email" 
            />
            </div>
            
            <button className='button' onClick={handleFormSubmission}> Submit</button>
          {/* <button className='button' onClick={checkLocalStorage}> check local Db</button> */}
        </div>     
      );
}

export default RegisterShop;