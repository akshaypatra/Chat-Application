import { Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserItem(props) {
    const userProfileUrl=`/user/${props.id}`;
  return (
    <Link to={userProfileUrl}>
    <ListItem>
        <ListItemAvatar>
            <Avatar variant="solid" />
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.email} ></ListItemText>

    </ListItem>
    </Link>
    
  )
}
