import React from 'react';
import "./App.css";

// new COMPONENT :')
function Tweet({name, message, likes}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h4>{likes} likes</h4>
        </div>
    );
}

export default Tweet