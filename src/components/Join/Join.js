import React from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = (props) => {
  const { setName, setRoom, name, room } = props;
  return (
    <div className="container">
      <h1 className="heading">Join Chat</h1>
      <input placholder="" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
      <input placholder="" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
      <Link to={`/chat`} >
        <button className="button" type="submit">Sign In</button>
      </Link>
    </div>
  );

}

export default Join;