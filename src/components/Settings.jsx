import React, {useEffect, useState, useContext} from 'react';
import { MainContext } from '../contexts/MainContext';
import './../assets/Settings.css'


const Settings = () => {
    const {
        settingTypes, 
        setSettingTypes, 
        setMessage, 
        setGameState,
        setUser,
        user
    } = useContext(MainContext);
    const [allDataNeeded, setAllDataNeeded] = useState(false);
    const [currentUserdata, setCurrentUserData] = useState("");

    useEffect(() => {
        fetch('https://starnavi-frontend-test-task.herokuapp.com/game-settings', {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then(response => response.json())
        .then(data => {
            setSettingTypes(data);
            setAllDataNeeded(true);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    const validateUserData = (userData) => {
        if(Object.keys(settingTypes).indexOf(userData.gameType) === -1)
            return false;
        
        if(userData.name === "" || userData.name === null || userData.name === undefined)
            return false;
        
        return true;
    }

    const getUserData = () => {
        const gameType_e = document.getElementById("gameMode");
        return {
            gameType: gameType_e.options[gameType_e.selectedIndex].getAttribute("data-type"),
            name: document.getElementById("name").value
        };
    }

    const handleNameChange = (e) => {
        setCurrentUserData(e.target.value);
    }

    const handlePlayButton = () => {
        const userData = getUserData();
        if(validateUserData(userData))
        {
            setMessage("Game Started Good luck !");
            setGameState(1);
        }
        else
            setMessage("Please Fill Correct Information !");
    }


    const ReanderingSettings = () => {
        return (
                <div className="content">
                    <div className="field">
                        <select id="gameMode">
                            <option>Pick Game Mode</option>
                            {
                                Object.keys(settingTypes).map((key, index) => (
                                    <option data-type={key} key={index}>{key}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="field">
                        <input type="text" onChange={handleNameChange} placeholder="Enter Your name" value={currentUserdata} id="name"/>
                    </div>
                    <div className="field">
                        <button onClick={handlePlayButton}>PLAY</button>
                    </div>
                </div>
            );
    }

    const ConditionalRendering = () =>
    {
        if(allDataNeeded)
            return <ReanderingSettings />
        else
            return <div>Loading ...</div>
    }
    

    return (
        <div id="settings">
            <ConditionalRendering />
        </div>
    );
}

export default Settings;
