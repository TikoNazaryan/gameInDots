import React, {useState, createContext} from 'react';

export const MainContext = createContext();

export const MainProvider = (props) => {
    const [user, setUser] = useState();
    const [settingTypes, setSettingTypes] = useState({});
    const [message, setMessage] = useState("Fill Information and click on PLAY Button");
    const [gameState, setGameState] = useState(0); // 0 - didn't started, 1 - started, 2 - finished

    return(
        <MainContext.Provider value={{
            settingTypes: settingTypes,
            setSettingTypes: setSettingTypes,

            message: message,
            setMessage: setMessage,

            gameState: gameState,
            setGameState: setGameState,

            user: user,
            setUser: setUser
        }}>
            {props.children}
        </MainContext.Provider>
    );
}