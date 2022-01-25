import React, {useState} from 'react';

function DarkMode(props) {

    const [darkMode, setDarkMode] = useState();

    const handleSlider = function () {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            console.log(darkMode);
            console.log('dark mode is true');
        } else if (darkMode === false) {
            console.log(darkMode);
            console.log('dark mode is false');
        }
    }
    return (
        <>
            <label className="switch" name="switch">
                <input onChange={handleSlider} type="checkbox"></input>
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default DarkMode;