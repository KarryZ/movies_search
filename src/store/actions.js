const getMovies = (sorter, filter, moviestoreService) => async (dispatch) => {
    let data = await moviestoreService.getAllMovies(sorter, filter);
    dispatch(moviesLoaded(data))
};

const moviesLoaded = (newMovies) => {
    return {
        type: 'MOVIES_LOADED',
        payload: newMovies
    };
};

const currentMovieIDReceived = (currentMovieID) => {
    return {
        type: 'RECEIVED_CURRENT_MOVIE_ID',
        payload: currentMovieID
    };
};

const deleteCurrentMovieID = () => {
    return {
        type: 'DELETE_CURRENT_MOVIE_ID'
    };
}

const moviesError = (error) => (dispatch) => dispatch({
    type: 'MOVIES_ERROR',
    payload: error
})

const deleteMovieFromList = (id, moviestoreService, sorter, filter) => async dispatch => {
    let response = await moviestoreService.deleteMovie(id);
    if (response.status === 204) {
        dispatch({
            type: 'DELETE_MOVIE_FROM_LIST',
            payload: id
        });
        dispatch(getMovies(sorter, filter, moviestoreService))
    }
};

const saveMovie = (newMovieData, isNewMovie, moviestoreService, sorter, filter) => async dispatch => {
    let data = await moviestoreService.saveMovie(newMovieData, isNewMovie);
    if (data.status === 201 || data.status === 200) {
        dispatch(getMovies(sorter, filter, moviestoreService))
    }
}

const setFilter = (newFilter) => (dispatch) => dispatch({
    type: 'SET_FILTER',
    payload: newFilter
})


const setSorter = (newSorter) => (dispatch) => dispatch({
    type: 'SET_SORTER',
    payload: newSorter
})

export {
    getMovies,
    moviesLoaded,
    currentMovieIDReceived,
    deleteCurrentMovieID,
    moviesError,
    deleteMovieFromList,
    saveMovie,
    setFilter,
    setSorter
};