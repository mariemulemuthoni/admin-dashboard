// Import necessary React and ReactDOM libraries for building the application.
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Import the global styles defined to maintain a consistent look and feel.
import './index.css';

// Render the main App component into the root element of the HTML document.
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,

    document.getElementById('root'),
);