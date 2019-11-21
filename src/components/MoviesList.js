import React from 'react';
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react'
import { PulseLoader } from 'react-spinners';

const MoviesList = ({ movies }) => {

    const emptyMessage = (
        <p>There are no movies yet.</p>
    );
    const moviesList = (
        <div>
            <PulseLoader
                size={14}
                color={'#35bdb2'}
                loading={movies.fetching}
            />
            {
                movies.error.response
                    ? <h3>Hata var !</h3>
                    :
                    <Grid stackable columns={3}>
                        {
                            movies.movieList.map(movie => <MovieCard key={movie._id} movie={movie} />)
                        }
                    </Grid>
            }
        </div>
    );

    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired,
    }).isRequired,
}

export default MoviesList