import './index.scss';
import React from 'react';

import MovieCard from './MovieCard';

class GridView extends React.Component {
    renderMovieCards(fourmovies) {
        return fourmovies.map(({ id, poster_path, title, release_date }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;

            return (
                <div className='container__columns__movie column' key={id}>
                    <MovieCard imageUrl={imageUrl} title={title} year={release_date} />
                </div>
            );
        });
    }

    renderMovieCards2() {
        return this.splitEvery(this.props.movies, 5).map(fourmovies => (
            <div className='columns'>
                {this.renderMovieCards(fourmovies)}
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
            <div className='container'>
                {this.renderMovieCards2()}
            </div>
        )
    }
};

export default GridView;

