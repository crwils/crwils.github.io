import React from 'react';

function Counter(props) {

    const handleClick = () => {props.setState(props.state+props.increment)};
    
    const counter = () => {

        return (
            <button onClick={handleClick}>+{props.increment}</button>
        )
    }

    return (
        <div>
            {counter()}
        </div>
    );
}

export default Counter;