import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const WithAuthentication=(WrappedComponent)=>{
    return function AuthComponent(props){
        const [isAuthenticated,setIsAuthenticated]=useState(false);


        const getAuthTokenFromCookie = () => {
            const cookies = document.cookie.split(';');
            
            for (const cookie of cookies) { // Use for...of to iterate through the array
              const [name, value] = cookie.trim().split('=');
              if (name === 'token') {
                return value;
              }
            }
            return null;
          };

        useEffect(()=>{
            const authToken=getAuthTokenFromCookie()
            if(authToken){
                setIsAuthenticated(true);
            }
            else{
                setIsAuthenticated(false);
            }
        },[]);
        

        if(isAuthenticated){
            return <WrappedComponent {...props}/>

        }else{
            return <Navigate to="/login/"/>
        }
    }
}


export default WithAuthentication;