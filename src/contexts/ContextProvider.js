import React, { createContext, useContext, useState } from 'react';

// Render the createContext as a function
const StateContext = createContext();

// Declare the default initial states to false.
const initialState = { 
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}


// States logic with useState function
export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(initialState);
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    // Theme settings states logic
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    // Dark and Light mode logic
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        // updating local storage
        localStorage.setItem('themeMode', e.target.value);
    }
    // Theme colors logic
    const setColor = (color) => {
        setCurrentColor(color);

        // updating local storage
        localStorage.setItem('colorMode', color);
    }

    // Handle click logic with spread operator.
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider
        // This is where we pass our logic globally.
        value={{
            initialState,
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            setColor,
            setMode,
            currentColor,
            currentMode,
            setThemeSettings,
            themeSettings
        }}
        >
        {children}
        </StateContext.Provider>
    )

}

// Export the function so the logic can be called globally.
// In other words, this is the code to let the other files use it. 
export const useStateContext = () => useContext(StateContext);