import React, {useState} from 'react';

function Form(props) {

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleButtonSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    return (
        <form action="">
            <input type="text" 
            placeholder="Search projects" 
            onChange={handleTextChange}
            />
        </form>
    );
}

export default Form;