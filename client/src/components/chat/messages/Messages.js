import React from 'react';
import Message from '../massege/Message';

const Messages = ({ messages, user_id }) => {
  return (
    <div>
      Messages {user_id}
      {JSON.stringify(messages)}
      {messages.map((message, i) => (
        <Message key={message._id} message={messages} current_uid={user_id} />
      ))}
    </div>
  )
}
export default Messages