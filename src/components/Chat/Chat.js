import React, { useCallback, useEffect } from 'react';
import io from 'socket.io-client';

let socket;
let message = "";

const Chat = (props) => {
  const { name, room } = props;
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name, room });
    console.log(`${room} established a new name as ${name}`);
    
  });

  return () => {
    socket.emit('disconnect', { name });
    console.log( `${name} has left the room`)

    socket.off();
  }

//   return (
//     <div>
//       <h1> Name: {name} <br/> Room: {room} </h1>
//       <input type="text" placeholder="Enter a message here!" id="message" onChange={(event) => message = event.target.value} value={message} />
//       <button onClick={event => sendMessage(name, message)}>Send Message</button>
//     </div>
//   );
// };

const sendMessage = (name, message) => {
  socket.emit('message', { name, message })
}

export default Chat;
