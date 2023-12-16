import React from "react";
import './Toggle.css';
import Sun from '../../img/icons8-sun-24.png';
import Moon from '../../img/icons8-moon-30.png';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleDarkMode = () => {
    // Dispatch an action to toggle dark mode in the context
    theme.dispatch({ type: 'toggle' });
  };
  const handleClick=()=>{
theme.dispatch({type:'toggle'});
  }

  return (
    <div className="toggle" onClick={toggleDarkMode}>
      <img src={Sun} alt="Sun_png" style={{ display: darkMode ? 'block' : 'none' }} />
      <img src={Moon} alt="Moon_png" style={{ display: darkMode ? 'none' : 'block' }} />
      <div className="t-button" style={{ left: darkMode ? '2px' : 'auto', right: darkMode ? 'auto' : '2px' }}></div>
    </div>
  );
};

export default Toggle;
