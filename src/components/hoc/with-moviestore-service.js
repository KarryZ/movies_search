import React from 'react';
import { MoviesServiceConsumer } from '../movies-service-context';

const withMovieStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <MoviesServiceConsumer>
                {
                    (moviestoreService) => {
                       return ( <Wrapped {...props}
                        moviestoreService={moviestoreService}/>
                       )
                    }
                }
            </MoviesServiceConsumer>
        );
    }
};

export default withMovieStoreService;