import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
//import WithAuthentication from '../utils/WithAuthentication'


 function Chatarea() {
  return (
    <div className='chat-area'>
        
        <div className='chat-header'>Chat header</div>
        <div className='messages'>
            <Message text="Hey,How its going" sent/>
            <Message text="I am good" recieved/>
        </div>
        <MessageInput/>
    </div>
  )
}

// export default WithAuthentication(Chatarea);
export default Chatarea;
