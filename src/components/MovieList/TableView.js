import './index.scss'
import React from 'react';

import MovieLine from './MovieLine';
import Pagination from '../Pagination';

class TableView extends React.Component {
    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        if (this.props.errors) {
            alert(this.props.errors)
            window.location.reload()
        }

        const renderMovies = this.props.movies.map(movie => {
            return <MovieLine title={movie.title} year={movie.release_date} key={movie.id} />
        })
        return (
            <div className='container  table-view'>
                <table className='table is-hoverable table-view__table table is-fullwidth'>
                    <thead>
                        <tr>
                            <th className='table-view__table__title has-text-centered' >Title</th>
                            <th className='table-view__table__year has-text-right'>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderMovies}
                    </tbody>
                </table>
                {this.props.numOfPages > 1 ? <Pagination numOfPages={this.props.numOfPages} /> : null}
            </div>
        )
    }
}
export default TableView