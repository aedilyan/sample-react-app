import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#ccc',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);