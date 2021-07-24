import React from 'react';

function Counter(props) {

    const counter = () => {
        return (
            <button>{props.state}</button>
        )
    }

    return (
        <div>
            {counter()}
        </div>
    );
}

export default Counter;