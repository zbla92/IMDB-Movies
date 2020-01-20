import React, { Component } from 'react'

import MovieList from '../MovieList';

class TableView extends Component {
    render() {
        console.log(this.props)
        return (
            <MovieList type='table' page={this.props.match.params.page || 1} />
        )
    }
}

export default TableView;