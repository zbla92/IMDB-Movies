import React, { Component } from 'react'

import MovieList from '../MovieList';

class GridView extends Component {
    render() {
        return (
            <MovieList type='grid' page={this.props.match.params.page || 1} />
        )
    }
}

export default GridView;