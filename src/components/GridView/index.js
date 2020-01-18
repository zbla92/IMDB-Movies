import React, { Component } from 'react'

import MovieList from '../MovieList';

class GridView extends Component {
    render() {
        return (
            <div className='container'>
                <MovieList type='grid' page={this.props.match.params.page || 1} />
            </div>
        )
    }
}

export default GridView;