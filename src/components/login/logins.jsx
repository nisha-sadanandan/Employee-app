import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [ShowPopup,setShowPopup]=useState(false);
    const navigate=useNavigate();
 
    const handleLogin=()=>{
        if(email==='admin' && password==='admin'){
               setShowPopup(true);
               setError('/header');
        }
        else{
            setError('Invalid credentials');
        }
    }

    const handleOk=()=>{
        navigate('/Employee')
    }
return(
       <div className='login-container'>
        <h2>Login</h2>
        <div className='input-container'>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={handleLogin} id="submit">Submit</button>
      {ShowPopup && (
        <div className='popup'>
            <p>Login Successfull</p>
            <button onClick={handleOk}>OK</button>
        </div>
        )}
       </div> 
    )
} 



