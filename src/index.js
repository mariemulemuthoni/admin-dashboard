// Import necessary React and ReactDOM libraries for building the application.
import React from 'react';
import ReactDOM from 'react-dom';

// Import the main App component that represents the structure of the application.
import App from './App';

// Import the global styles defined in the index.css file to maintain a consistent look and feel.
import './index.css';

// Render the main App component into the root element of the HTML document.
ReactDOM.render(<App />, document.getElementById('root'));