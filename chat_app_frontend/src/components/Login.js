import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {

        const BASE_URL="http://127.0.0.1:8000/";
      
        const [formData, setFormData] = useState({
          'email':"",
          'password':""
        });
      
        const handleFormSubmit=()=>{
          fetch(`${BASE_URL}login/`,{
                method:"POST",
                headers:{
                  'Content-Type':"application/json"
                },
                body:JSON.stringify(formData)
          })
          .then(response=>response.json())
          .then(data=>{
            console.log(data);
          })
          .catch(error=>{
            console.log(error)
          })
        }

  return (
    <div className='container text-center' >
        <h1>Login</h1>
    <div className='mt-3'>
        
        <div className='mt-3'><TextField  id="email" type='email' label="Email" variant="outlined" onChange={e=>setFormData({...formData,email:e.target.value})} /></div>
        <div className='mt-3'><TextField id="password" type='password' label="Password" variant="outlined" onChange={e=>setFormData({...formData,password:e.target.value})} /></div>
        <div className='mt-4'><Button  variant="contained" onClick={handleFormSubmit}>Submit</Button></div>
    </div></div>
  )
}
