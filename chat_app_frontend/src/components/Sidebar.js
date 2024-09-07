import React, { useEffect,useState } from 'react'
//import WithAuthentication from '../utils/WithAuthentication'
import axios from 'axios';
import { Box, LinearProgress, List } from '@mui/material';
import UserItem from './UserItem';

function Sidebar() {

  const BASE_URL=`http://127.0.0.1:8000/`;
  const [userList, setUserList] = useState([]);
  const [userLoader,setUserLoader]=useState(true);
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
    // console.log(authToken)
    if(authToken){
       axios.get(`${BASE_URL}api/users`,{
        headers:{
          Authorization:`Bearer ${authToken}`
        }
       }).then(response=>{
        setUserList(response.data);
        setUserLoader(false);
        // console.log(userList);
       }).catch(error=>{
        console.log("Error making api request :",error);
       })
    }
  // eslint-disable-next-line
  },[])

  return (
    <div className='side-bar'>
      {userLoader ? (<Box sx={{width:'100%'}}>
         <LinearProgress/>
      </Box>):
      (<List sx={{width:'100%',maxWidth:360,bgcolor:'background.paper'}}>
         {userList.map((user,index)=>(
            <UserItem key={index} email={user.email} name={`${user.first_name} ${user.last_name}`}  id={user.id} />
         )
      )}
      </List>)

      }
    </div>
  )
}

// export default WithAuthentication(Sidebar)
export default Sidebar;