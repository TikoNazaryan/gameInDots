import React from 'react';
import Settings from './Settings';

import './../assets/GameContainer.css';
import Message from './Message';

const GameContainer = () => {
    return (
        <div id="gameContainer">
            <div className="content">
                <Settings />
                <Message />
            </div>
        </div>
    );
}

export default GameContainer;
