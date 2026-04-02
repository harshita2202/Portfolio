//here I am creating a global theme system for dark and light mode for my portfolio

import { createContext, useContext, useState } from 'react';
//I am using 3 special hooks here 
//1. createcContext - to creata gloabl data storage
//2. useContext - to access the global data 
// 3. useState - store the theme
const ThemeContext = createContext(); // making a global container , which will store the theme data  

export const ThemeProvider = ({ children }) => {// it wraping the entire app , and all the childers with the theme 
  const [dark, setDark] = useState(true);//the default state is dark; as "flase = light" & "true = dark"
  const toggleTheme = () => setDark(prev => !prev);
  //this flips the theme dark to light OR light to dark
  return (
    //it makes dark and togglethme available to all components 
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      

      <div className={dark ? 'dark' : 'light'} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);//this is a custom hook 