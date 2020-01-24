import './index.scss';
import React from 'react';

import MovieCard from './MovieCard';
import Pagination from '../Pagination';

class GridView extends React.Component {
    state = {
        insertRowEvery: 5,
        currentPage: 1
    }
    componentWillUnmount() {
        this.props.clearErrors()
    }

    renderMovieCardsRow(numOfMovies) {
        const rez = numOfMovies.map(({ id, poster_path, title, release_date, vote_average }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;
            return (
                <MovieCard imageUrl={imageUrl} title={title} year={release_date} vote_average={vote_average} key={id} />
            );
        });
        return rez
    }

    renderMovieCards() {
        return this.splitEvery(this.props.movies, this.state.insertRowEvery).map((numOfMovies, index) => (
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
        if (this.props.errors) {
            alert(this.props.errors)
            window.location.reload()
        }
        return (
            <div className='grid-view'>
                <div className='grid-view__container container'>
                    {this.renderMovieCardsRow(this.props.movies)}
                </div>
                {this.props.numOfPages > 1 ? <Pagination
                /> : null}
            </div>
        )
    }
};

export default GridView;

