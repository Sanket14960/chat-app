import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'


const Chat = (props) => {
    const { name } = props;
    return (
        <div className="container">
            <h1>Logged in as {name}</h1>
            <div className="message-box"></div>
            <input type="text" placeholder="Enter your message" />
            <button onClick={sendMessage}>Send</button>
        </div>
    );

    function sendMessage(event) {
        console.log(`Sending a message now!`)   
    }
}

export default Chat;