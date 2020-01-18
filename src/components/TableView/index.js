import React, { Component } from 'react'

import MovieList from '../MovieList';

class TableView extends Component {
    render() {
        return (
            <div className='container'>
                <MovieList type='table' page={this.props.match.params.page || 1} />
            </div>
        )
    }
}

export default TableView;