import React from 'react';
import Message from '../massege/Message';

const Messages = ({ messages, user_id }) => {
  debugger;
  return (
    <div>

      {messages.map((message, i) => (
        <Message key={message._id} message={message} current_uid={user_id} />
      ))}
    </div>
  )
}
export default Messages