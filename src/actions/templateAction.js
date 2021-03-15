//this is an action creator and it returns an object

export const setCharacters = (c) => {
    return {
        type: "SET_CHARACTERS",
        data: c,
    }
}

export const setEpisodes = (e) => {
    return {
        type: "SET_EPISODES",
        data: e,
    }
}

export const setLocations = (l) => {

    return {
        type: "SET_LOCATIONS",
        data: l,
    }
}

//this is not a named export
//when we import inot our componenets we have to import like this
/*
import {increment} from './path'

named export
export default increment

import increment from './path'
*/