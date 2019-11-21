import {
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE_PENDING
} from '../actions/newMovie'

const initialState = {
    movies: [],
    fetching: false,
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
        default:
            return state
    }
}