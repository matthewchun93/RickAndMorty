import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {setCharacters} from '../actions/templateAction';

const SearchCharacter = (props) => {

    const characters = Object.values(props);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(setCharacters(searchResults));
    }
    // setSearchTerm("");

    // let newarray = [characters[0][0]];
    // console.log(newarray);

    // const filteredChar = characters.filter(c => c[0].name.includes(searchTerm));
    // console.log(filteredChar)

    useEffect(() => {
        const results = characters[0].filter(char => {
            return char.name.toLowerCase().includes(searchTerm.toLowerCase())

        });
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <input 
            type="text" 
            placeholder="Search for someone here!" 
            value={searchTerm} 
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default SearchCharacter;