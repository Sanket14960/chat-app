import React, { useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = (props) => {
  const { name, room } = props;
  const ENDPOINT = 'localhost:5000';

  
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('name', name);
    console.log(`${socket.id} established a new name as ${name}`);
  });

  return (
    <h1> {name} </h1>
  );
};

export default Chat;
