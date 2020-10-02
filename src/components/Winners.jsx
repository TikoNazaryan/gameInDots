import React from 'react';
import { useContext } from 'react';
import { MainContext } from './../contexts/MainContext';

const Winners = () => {
    const {data} = useContext(MainContext);

    return (
        <div id="winners">
            
        </div>
    );
}

export default Winners;
