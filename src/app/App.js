import React from "react"
import HomePage from './home/HomePage'
import authService from './services/authService'

authService.init();

const App = () => {
    return (
        <HomePage />
    );
};

export default App;
