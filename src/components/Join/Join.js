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
            <Link onClick={onChatJoin} to={`/chat`} >
                <button className="button" type="submit">Sign In</button>
            </Link>
        </div>
    );

    function onChatJoin(event) {
        if (!name || !room) {
            event.preventDefault()
            // Sending data out here
            console.log("Sending the username and room to backend", JSON.stringify({ name, room }))
        }
    }

}

export default Join;