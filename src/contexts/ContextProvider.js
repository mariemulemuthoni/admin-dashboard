// Create a React context to manage the state shared across components.
import React, { createContext, useContext, useState } from 'react';

// Define the initial state with boolean flags for different application features.
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

// Create a context named StateContext to share state information.
const StateContext = createContext();

// Define a provider component to wrap the application and manage state.
export const ContextProvider = ({ children }) => {
    // State hook to manage the activeMenu state within the context.
    const [activeMenu, setActiveMenu] = useState(true);

    // Provide the state values and updating function to the context.
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to easily access the state values from any component.
export const useStateContext = () => useContext(StateContext);
