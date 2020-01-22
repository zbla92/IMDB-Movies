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
        return numOfMovies.map(({ id, poster_path, title, release_date, vote_average }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;

            return (
                <div className='grid-view_column column is-vcentered' key={id}>
                    <MovieCard imageUrl={imageUrl} title={title} year={release_date} vote_average={vote_average} key={id} />
                </div>
            );
        });
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

    updateCurrentPage = (page) => {
        console.log(page)
    }


    render() {
        if (this.props.errors) {
            alert(this.props.errors)
        }
        return (
            <div className='container grid-view'>
                {this.renderMovieCards()}
                {this.props.numOfPages > 1 ? <Pagination
                    numOfPages={this.props.numOfPages}
                    currentPage={this.state.currentPage}
                /> : null}
            </div>
        )
    }
};

export default GridView;

