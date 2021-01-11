import React from 'react'

const Message = ({ message: { name, user_id, text }, current_uid }) => {
  debugger;
  return (
    <div>
      {name}:{text}
    </div>
  )
}

export default Message
