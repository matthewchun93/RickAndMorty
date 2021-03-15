
const initialState = {
    characters: [],
    episodes:[],
    locations: [],
}

//purpose of reducer is to return a new global state
//reducer must be passed into store
const reducerTemplate = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_CHARACTERS': //needs to be the same as action.type in actions
            return {
                ...state,
                characters: action.data
            }
        case 'SET_EPISODES': //needs to be the same as action.type in actions
            return {
                ...state,
                episodes: action.data
            }
        case 'SET_LOCATIONS': //needs to be the same as action.type in actions
            return {
                ...state,
                locations: action.data
            }
        default:
            return state;
    }

}

export default reducerTemplate
