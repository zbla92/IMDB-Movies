import './index.scss'
import React from 'react';

import MovieLine from './MovieLine';
import Pagination from '../Pagination';

class TableView extends React.Component {
    state = {
        movies: this.props.movies
    }
    componentWillUnmount() {
        this.props.clearErrors()
    }

    sortMoviesByYear = movies => {
        const sorted = movies.sort((a, b) => {
            return a.release_date > b.release_date ? -1 : a.release_date < b.release_date ? 1 : 0
        })
        this.setState({ movies: sorted })
    }

    sortMoviesAlphabetically = movies => {
        const sorted = movies.sort((a, b) => {
            const movieA = a.title.charAt(0);
            const movieB = b.title.charAt(0);
            return movieA < movieB ? -1 : movieA > movieB ? 1 : 0
        })
        this.setState({ movies: sorted })
    }

    render() {
        if (this.props.errors) {
            alert(this.props.errors)
            window.location.reload()
        }

        const renderMovies = (movies = this.props.movies) => movies.map(movie => {
            return <MovieLine title={movie.title} year={movie.release_date} key={movie.id} />
        })
        return (
            <div className='container  table-view'>
                <table className='table is-hoverable table-view__table table is-fullwidth'>
                    <thead>
                        <tr>
                            <th className='table-view__table__title has-text-centered' > <a onClick={() => this.sortMoviesAlphabetically(this.props.movies)}>Title</a></th>
                            <th className='table-view__table__year has-text-right'><a onClick={() => this.sortMoviesByYear(this.props.movies)}>Year</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderMovies()}
                    </tbody>
                </table>
                {this.props.numOfPages > 1 ? <Pagination numOfPages={this.props.numOfPages} /> : null}
            </div>
        )
    }
}
export default TableView