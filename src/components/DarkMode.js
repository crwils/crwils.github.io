import React, {useState} from 'react';

function DarkMode(props) {

    const [darkMode, setDarkMode] = useState();

    const handleSlider = function () {
        setDarkMode(!darkMode);
        console.log(darkMode);
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