import './index.scss';
import React from 'react';

import MovieCard from './MovieCard';

class GridView extends React.Component {
    renderMovieCardsRow(numOfMovies) {
        return numOfMovies.map(({ id, poster_path, title, release_date, vote_average }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;

            return (
                <div className='grid-view_column column' key={id}>
                    <MovieCard imageUrl={imageUrl} title={title} year={release_date} vote_average={vote_average} key={id} />
                </div>
            );
        });
    }

    renderMovieCards() {
        return this.splitEvery(this.props.movies, 5).map((numOfMovies, index) => (
            <div className='columns grid-view__columns' key={index}>
                {this.renderMovieCardsRow(numOfMovies)}
            </div>
        ))
    }

    splitEvery = (array, length) =>
        array.reduce(
            (result, item, index) => {
                if (index % length === 0) result.push([])
                result[Math.floor(index / length)].push(item)
                return result
            },
            []
        )




    render() {
        return (
            <div className='container grid-view'>
                {this.renderMovieCards()}
            </div>
        )
    }
};

export default GridView;

