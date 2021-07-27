import React, {useState} from 'react';

function Search(props) {

    const [search, setSearch] = useState("");

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleButtonSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    return (
        <form action="">
            <input type="text" 
            placeholder="Search projects" 
            onChange={handleSearchChange}
            />
        </form>
    );
}

export default Search;