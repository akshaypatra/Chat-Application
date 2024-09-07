import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import withAuthentication from '../utils/withAuthentication'


 function Chatarea() {
  return (
    <div className='chat-area'>
        
        <div className='chat-header'></div>
        <div className='messages'>
            <Message text="Hey,How its going" sent/>
            <Message text="I am good" recieved/>
        </div>
        <MessageInput/>
    </div>
  )
}

export default withAuthentication(Chatarea);
