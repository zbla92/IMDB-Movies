import './index.scss'
import React from 'react';

import MovieLine from './MovieLine';

class TableView extends React.Component {

    render() {
        const renderMovies = this.props.movies.map(movie => {
            return <MovieLine title={movie.title} year={movie.release_date} key={movie.id} />
        })
        return (
            <div className='container  table-view'>
                <table className='table is-hoverable is-stripped table-view__table table is-fullwidth'>
                    <thead>
                        <tr>
                            <th className='table-view__table__title has-text-centered' >Title</th>
                            <th className='table-view__table__year has-text-right'>Year</th>
                        </tr>
                    </thead>
                    {renderMovies}
                </table>
            </div>
        )
    }
}
export default TableView