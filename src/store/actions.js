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

const moviesError = (error) => {
    return { 
        type: 'MOVIES_ERROR',
        payload: error
    };
};

const deleteMovieFromList = (id) => {
    return { 
        type: 'DELETE_MOVIE_FROM_LIST',
        payload: id
    };
};

const saveMovie  = (newMovieData) => {
    return { 
        type: 'SAVE_MOVIE',
        payload: newMovieData
    };
}

const setFilter = (newFilter) => {
    return { 
        type: 'SET_FILTER',
        payload: newFilter
    };
}


const setSorter = (newSorter) => {
    return { 
        type: 'SET_SORTER',
        payload: newSorter
    };
}

export {
    moviesLoaded,
    currentMovieIDReceived,
    deleteCurrentMovieID,
    moviesError,
    deleteMovieFromList,
    saveMovie,
    setFilter,
    setSorter
};