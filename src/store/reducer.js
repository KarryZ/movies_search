const initialState = {
    moviesList: [],
    movieDetailID: null,
    loading: true,
    error: null,
    sorter: "release_date",
    filter: ""
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MOVIES_LOADED':
            return {
                ...state,
                loading: false,
                moviesList: action.payload                
            };
        case 'RECEIVED_CURRENT_MOVIE_ID':
            return {
                ...state,
                movieDetailID: action.payload
            };
        case 'DELETE_CURRENT_MOVIE_ID':
            return {
                ...state,
                movieDetailID: null
            };
        case 'MOVIES_ERROR':
            return {
                moviesList: [],
                movieDetailID: null,
                loading: false,
                error: action.payload,
                sorter: "release_date",
                filter: ""
            };
        case 'DELETE_MOVIE_FROM_LIST':
            const movieID = action.payload;
            const movieIndex = state.moviesList.findIndex(item => item.id === movieID);
            let updatedMovieList = [
                ...state.moviesList.slice(0, movieIndex),
                ...state.moviesList.slice(movieIndex + 1)
            ];
            return {
                ...state,
                moviesList: updatedMovieList,
                movieDetailID: null,
                // loading: false,
                // sorter: "release_date",
                // filter: ""
            };
        case 'SAVE_MOVIE':
            return Object.assign({ ...state, movies: action.payload.moviesList });
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
                movieDetailID: null
            };
        case 'SET_SORTER':
            return {
                ...state,
                sorter: action.payload,
                movieDetailID: null
            };

        default:
            return state;
    }
};

export default reducer;