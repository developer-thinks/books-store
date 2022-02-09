import { useState } from "react";
import './registershop.css'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [storeName, setStoreName] = useState("");
    const [place, setPlace] = useState("");
    const [secureCode, setSecureCode] = useState("")
    const [registeredShop, setRegisteredShop] = useState("");
    const nevigate = useNavigate()


    const handleLogin = ()=>{

            Axios.post('http://localhost:5000/api/login',{
                storeName, secureCode
            }).then(res=>{
                // console.log(res);
                if(res.data.message){
                  nevigate('/')
                } else{
                  nevigate('/login')
                }
            })
    }

    return (

        <div className="app">
          <h2>Login to proceed: </h2>
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
            <label>secureCode :</label>
            <input
              className="input_label" 
              type = "email" 
              value={secureCode} 
              onChange={(e)=>setSecureCode(e.target.value)} 
              placeholder="Enter securecode" 
            />
            </div>
            <button className='button' onClick={handleLogin}> Login</button>
          </div>     
      );
}

export default Login;