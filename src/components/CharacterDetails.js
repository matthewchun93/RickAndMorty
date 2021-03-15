import {Paper} from './Styles';
import React from 'react'
import {ImageS} from './Styles';

const CharacterDetails = (props) => {
    const {name, status, species, gender, type, image, origin} = props.details

    return (
        <>
        <Paper width="100%" height="auto">
            <h1>Click on their picture for details</h1>
            <strong>Name: </strong>{name}<br/>
            <strong>Status: </strong>{status}<br/>
            <strong>Species: </strong>{species}<br/>
            <strong>Gender: </strong>{gender}<br/>
            <strong>Type: </strong>{type}<br/>
            {/* <strong>Origin: </strong>{origin.name}<br/> */}
            <strong>Image of character: </strong>
            <ImageS src={image} alt="" /> 
        </Paper>
        </>
    )
}

export default CharacterDetails
