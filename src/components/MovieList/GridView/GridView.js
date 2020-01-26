import '../index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../../MovieCard/MovieCard';
import Pagination from '../../Pagination';

class GridView extends React.Component {
    state = {
        insertRowEvery: 5
    }
    componentWillUnmount() {
        this.props.clearErrors()
    }

    renderMovies(movies) {
        const rendered = movies.map(({ id, poster_path, title, release_date, vote_average }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;
            return (
                <MovieCard imageUrl={imageUrl} title={title} year={release_date} vote_average={vote_average} key={id} />
            );
        });
        return rendered
    }
    render() {
        if (this.props.errors) {
            alert(this.props.errors)
            window.location.reload()
        }
        return (
            < div className='grid-view  animated fadeIn' >
                <div className='grid-view__container container'>
                    {this.renderMovies(this.props.movies)}
                </div>
                {
                    this.props.numOfPages > 1 ? <Pagination page={this.props.page}
                    /> : null
                }
            </div >
        )
    }
};

GridView.propTypes = {
    movies: PropTypes.array.isRequired,
    clearErrors: PropTypes.func.isRequired,
    numOfPages: PropTypes.number,
    page: PropTypes.number
}


export default GridView;

