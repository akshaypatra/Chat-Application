import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const withAuthentication=(wrappedComponent)=>{
    return function AuthComponent(props){
        const [isAutheticated,setIsAuthenticated]=useState(false);

        useEffect(()=>{
            const token=document.cookie.split('; ').find(row=> row.startsWith('token='))
            if(token){
                setIsAuthenticated(true);
            }
            else{
                setIsAuthenticated(false);
            }
        },[]);

        if(isAutheticated){
            return <wrappedComponent {...props}/>

        }else{
            return <Navigate to="/login/"/>
        }
    }
}


export default withAuthentication;