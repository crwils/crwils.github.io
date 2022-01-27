import React, {useEffect, useState} from 'react';
import $ from 'jquery';

function DarkMode(props) {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        handleSlider();
    }, [])

    const handleSlider = function () {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            console.log('true');
            $(document).ready(function() {
                $('section, h2, a').addClass('css-light');
            })

        } else if (darkMode === false) {
            console.log('false');
            $(document).ready(function() {
                $('section, h2, a').removeClass('css-light');
            })
        }
    }
    return (
        <>
            <label className="switch" name="switch">
                <input onChange={handleSlider} type="checkbox"></input>
                <span className="slider round"></span>
                {darkMode ? 
                <p style={{color: 'white'}}>☽</p>
                :
                <p style={{color: 'black'}}>☀</p>
                }
            </label>
        </>
    );
}

export default DarkMode;