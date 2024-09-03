import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
  return (
    <div className='container text-center'>
        <h1>Register</h1>
        <div className='mt-3'>
            
            <div className='mt-3'><TextField  id="email" type='email' label="Email" variant="outlined" /></div>
            <div className='mt-3'><TextField id="first_name" type='text' label="First Name" variant="outlined" /></div>
            <div className='mt-3'><TextField id="last_name" type='text' label="Last Name" variant="outlined" /></div>
            <div className='mt-3'><TextField id="password" type='password' label="Password" variant="outlined" /></div>

            <div className='mt-4'><Button  variant="contained">Submit</Button></div>
        </div>

        
    </div>
  )
}
