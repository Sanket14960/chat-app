import React, { useState } from 'react';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import './app.css';

const App = () => {

  const [name, setName] = useState('name');
  const [room, setRoom] = useState('room');

  return (
    <Router>
      <Route path="/" exact render={props => <Join setName={setName} setRoom={setRoom} name={name} room={room} />} />
      <Route path="/chat" render={props => <Chat name={name} room={room} />} />
    </Router>
  );
}

export default App;
